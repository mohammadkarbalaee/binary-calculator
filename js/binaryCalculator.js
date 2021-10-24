let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let res = document.getElementById('res');

var screen = "";

btn0.onclick = () => {
    screen += "0";
    res.innerHTML = screen;
}

btn1.onclick = () => {
    screen += "1";
    res.innerHTML = screen;
}

btnClr.onclick = () => {
    screen = "";
    res.innerHTML = screen;
}


btnSum.onclick = () => {
    screen += "+";
    res.innerHTML = screen;
}


btnSub.onclick = () => {
    screen += "-";
    res.innerHTML = screen;
}


btnDiv.onclick = () => {
    screen += "/";
    res.innerHTML = screen;
}


btnMul.onclick = () => {
    screen += "*";
    res.innerHTML = screen;
}


btnEql.onclick = () => {
    let answer;
    let number1;
    let number2;
    let numbers;
    if (screen.indexOf("+") !== -1) {

        numbers = screen.split("+");
        number2 = parseInt(numbers[0], 2);
        number1 = parseInt(numbers[1], 2);
        const sum = number2 + number1;
        answer = sum.toString(2);

    } else if (screen.indexOf("-") !== -1) {

        numbers = screen.split("-");
        number2 = parseInt(numbers[0], 2);
        number1 = parseInt(numbers[1], 2);
        const sub = number2 - number1;
        answer = sub.toString(2);

    } else if (screen.indexOf("*") !== -1) {

        numbers = screen.split("*");
        number2 = parseInt(numbers[0], 2);
        number1 = parseInt(numbers[1], 2);
        const mul = number2 * number1;
        answer = mul.toString(2);

    } else if (screen.indexOf("/") !== -1) {

        numbers = screen.split("/");
        number2 = parseInt(numbers[0], 2);
        number1 = parseInt(numbers[1], 2);
        const div = number2 / number1;
        answer = div.toString(2);

    }
    screen = answer;
    res.innerHTML = screen;
}
