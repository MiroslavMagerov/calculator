function init() {
    const RESULT_DISPLAY = document.querySelector("#result");
    const DIVS = document.querySelectorAll("#bottom-buttons-div button");
    DIVS.forEach((div) => {
        div.addEventListener("click", () => buttonClicked(div.value, RESULT_DISPLAY));
    });
}

function buttonClicked(value, result) {
    const OPERATIONS = ["%", "/", "*", "-", "+", "=", "C", "D"];

    if (OPERATIONS.includes(value)) {
        switch (value) {
            case "C" : result.textContent = ""; break;
            case "D" : result.textContent = result.textContent.slice(0, -1);
        }
    }
    else if (result.textContent.length < 10) {
        result.textContent += value;
        console.log(result.textContent.length);
    }
}

function convertToNum(value) {
    return parseFloat(value);
}