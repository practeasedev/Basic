const addTextBox = document.getElementById("add");
const todoList = document.getElementById("todo__list");
const addButton = document.getElementById("add__button");
const emptyMessage = document.getElementById("todo__list_empty_message");

const constants = {
	STRIKE: 'strike',
	DELETE: 'delete',
	EDIT: 'edit',
	CONTINUE_EDIT: 'continueEdit'
}


let editElementId = -1;

addTextBox.addEventListener("keyup", ({keyCode}) =>{
	if (keyCode === 13) addButton.click();
})

const renderList = () =>{
	const listElements = localStorage.getItem("todoItemList") && JSON.parse(localStorage.getItem("todoItemList"))|| [];
	emptyMessage.style.display = "none";
	if(!listElements.length) emptyMessage.style.display = "block";
	
	html=""
	listElements.map(({id,strike,value})=>{
		let displayNone	= id===editElementId;
		html += `
		<li class="todo__list_item ${displayNone? 'disable':''}" id=item${id}>
			<div class="todo__list_content">
				<input type="checkbox" ${strike && "checked"}>
				<div class="task ${strike?'strike_through':''}" onclick="handleActions(${id},constants.STRIKE)">
					${value}
				</div>
			</div>
			<span class="todo__list_actions">&vellip;</span>
		</li>`
	})
	todoList.innerHTML = html
}

const addListItem = () =>{
	let currentId = +localStorage.getItem("currentId") || 0;
	const listElements = localStorage.getItem("todoItemList") && JSON.parse(localStorage.getItem("todoItemList"))|| [];
	if(addTextBox.value){
		const listItem = {
			id:currentId+1,
			strike: false,
			value: addTextBox.value,
		}
		listElements.push(listItem);
	}
	addTextBox.value= "";
	localStorage.setItem("todoItemList",JSON.stringify(listElements));
	localStorage.setItem("currentId", currentId+1);
	renderList()
}

const handleEdit = ({id,value}) => {
	addTextBox.value = value;
	addButton.onclick = () => handleActions(id,constants.CONTINUE_EDIT)
	addButton.innerHTML = "Edit Todo";
	addButton.style.background =  "#03E3BB";
}

const handleActions = (e,action,) =>{
	const listElements = localStorage.getItem("todoItemList") && JSON.parse(localStorage.getItem("todoItemList"))|| [];
	const elementIndex = listElements.findIndex(({id})=> id === e);
	const element = listElements.find(({id})=> id === e)
	console.log(action)
	switch(action){
		case constants.DELETE:
			listElements.splice(elementIndex,1);
			break;
		case constants.STRIKE:
			element.strike = !element.strike;
			listElements.splice(elementIndex,1,element)
			break;
		case constants.EDIT:
			editElementId = element.id;
			handleEdit(element)
			break;
		case constants.CONTINUE_EDIT:
			editElementId = -1;
			addTextBox.value?element.value = addTextBox.value:listElements.splice(elementIndex,1);
			addButton.onclick = addListItem;
			addTextBox.value = "";
			addButton.innerHTML = "Add Todo";
			addButton.style.background =  "#0085FF";
	}
	
	
	localStorage.setItem("todoItemList",JSON.stringify(listElements));
	renderList();
}

renderList()

// <div class="todo_list__actions">
// 				<div class="edit_button ${displayNone? 'hide':''}" onclick="handleActions(${id},constants.EDIT)"><img src="./resources/edit.svg"></div>
// 				<div class="delete_button" onclick="handleActions(${id},constants.DELETE)"}><img src="./resources/delete.svg"></div>
// 			</div>