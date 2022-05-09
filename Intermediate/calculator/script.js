const display = document.getElementById("calculator__display");
display.innerHTML = "0";

/* Display Logic */
const getValAfterValidation = (val, displayVal) => {
    if (val === ".") {
        for (let i = displayVal.length; i >= 0; i--) {
            console.log(displayVal[i])
            if (["+", "-", "/", "*"].includes(displayVal[i])) {
                return displayVal + val;
            }
            if (displayVal[i] == ".") return displayVal;
        }
        return displayVal + val;
    }
    else if (["+", "-", "*", "/"].includes(displayVal.at(-1))) {
        switch (val) {
            case "+":
            case "-":
            case "*":
            case "/": return displayVal.slice(0, -1) + val;
            default: return displayVal + val;
        }
    }
    else {
        switch (displayVal) {
            case "0": if (["/", "*"].includes(val)) return `0${val}`;
            case "": return val;
            case "INVALID": return val;
            default: return displayVal + val;
        }
    }
}

const updateDisplay = (val) => {
    display.innerHTML = getValAfterValidation(val, display.innerHTML);
}

/* Evaluating Mathematical Expression */
const evaluateExpression = () => {
    try {
        display.innerHTML = eval(display.innerHTML);
    }
    catch {
        display.innerHTML = "INVALID";
    }
}

/* Clearing Single Character */
const clearPrev = () => {
    let displayVal = display.innerHTML;
    if (displayVal.length === 1) display.innerHTML = "0";
    else display.innerHTML = displayVal.slice(0, -1);
}

/* Clear Display*/
const clearAll = () => {
    display.innerHTML = "0";
}