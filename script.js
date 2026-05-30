const display = document.getElementById("display");
const history = document.getElementById("history");

let expression = "";

function appendValue(value){

    if(value === "+/-"){
        if(expression !== ""){
            expression = (-eval(expression)).toString();
            display.innerText = expression;
        }
        return;
    }

    expression += value;
    display.innerText = expression;
}

function clearDisplay(){
    expression = "";
    display.innerText = "0";
    history.innerText = "";
}

function calculate(){

    try{

        history.innerText = expression;

        expression = eval(expression).toString();

        display.innerText = expression;

    }catch{

        display.innerText = "Error";

    }

}