// Necessary DOM references
let tiles = document.getElementsByClassName("game_board__tile");
let gameCount = document.getElementById("game__count");
let xWins = document.getElementById("x_wins");
let xDraws = document.getElementById("x_draws");
let oWins = document.getElementById("o_wins");
let oDraws = document.getElementById("o_draws");
let winning = document.getElementById("game__winning");

// global state
let currentWinner, xMoves, oMoves, turn, lastMoveIndex, noOfMoves;
let boardState = Array(9);


// Winning Board States 
let winBoardStates = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

//Initializing New Game Session 
const newSession = () => {
	winning.textContent = "-"
	gameCount.textContent = 0;
	xWins.textContent = 0;
	xDraws.textContent = 0;
	oWins.textContent = 0;
	oDraws.textContent = 0;
	restart(true);
}

// Resetting Game Board 
const restart = (isNewSession) => {
	turn = 'X';
	xMoves = [];
	oMoves = [];
	lastMoveIndex = null;
	noOfMoves = 0;
	boardState.fill('');

	for (let t in tiles) tiles[t].innerHTML = "";

	if (!isNewSession) {
		gameCount.innerHTML = parseInt(gameCount.innerHTML) + 1;
		if (!currentWinner) {
			xDraws.innerHTML = parseInt(xDraws.innerHTML) + 1;
			oDraws.innerHTML = parseInt(oDraws.innerHTML) + 1;
		}
	}
	currentWinner = '';
}

//Checking if the current player won the game
const isWinner = (player) => {
	let playerMoves = player === 'X' ? xMoves : oMoves;
	let win = winBoardStates.some(state => {
		let [a, b, c] = state;
		return (playerMoves.includes(a) && playerMoves.includes(b) && playerMoves.includes(c))
	});
	return win;
}

// Displaying winner and starting a new game 
const displayWinnerMessageAndRestart = (winner) => {
	let msg = document.getElementsByClassName("message");
	let winnerField = document.getElementById("winner");
	if (winner === "DRAW!") {
		msg[0].innerHTML = "";
		winnerField.innerHTML = "DRAW!";
	}
	else {
		msg[0].innerHTML = "Winner of the Round";
		winnerField.innerHTML = winner;
	}
	let modal = document.getElementById("game__winner_modal");
	modal.style.display = "flex";
	setTimeout(() => {
		modal.style.display = "none";
		restart();
	}, 2000);
}

// Updating Curently winning player 
const updateWinning = () => {
	let xwin = xWins.innerHTML;
	let owin = oWins.innerHTML;
	let leading = xwin > owin ? "X" : (xwin < owin ? "O" : "DRAW!");
	winning.innerHTML = leading;
}

// placing 'X' or 'O'
const makeMove = (tileIndex) => {
	if (!boardState[tileIndex]) {
		noOfMoves += 1;
		boardState[tileIndex] = turn;
		tiles[tileIndex].innerHTML = turn;
		turn === "X" ? xMoves.push(tileIndex) : oMoves.push(tileIndex);

		if (isWinner(turn)) {
			currentWinner = turn;
			turn === "X" ? xWins.innerHTML = parseInt(xWins.innerHTML) + 1 : oWins.innerHTML = parseInt(oWins.innerHTML) + 1;
			displayWinnerMessageAndRestart(turn);
			updateWinning();
		}
		else if (noOfMoves >= 9) displayWinnerMessageAndRestart("DRAW!");

		turn = (turn === "X") ? "O" : "X";
		lastMoveIndex = tileIndex;
	}
}

// undo last move
const undo = () => {
	if (lastMoveIndex) {
		noOfMoves -= 1;
		tiles[lastMoveIndex].innerHTML = "";
		boardState[lastMoveIndex] = "";
		turn = (turn === "X") ? "O" : "X";
		turn == "X" ? xMoves.pop() : oMoves.pop();
		lastMoveIndex = null;
	}
}



// Initializing new game session
newSession();
