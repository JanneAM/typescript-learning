let value : string = "";
let result: number = 0;
let operand: string ="i";

const element = (id:string) => {
    return document.getElementById(id);
}


const setScreenValue = (screenValue : string) => {
    const input = element("input");
    input.innerHTML = String(screenValue);
}

const setNumberToValue = (e: any) => {
    value += e.target.innerHTML;
    setScreenValue(value);
}

const clearMemory = () => {
    value = "";
    result = 0;
    operand = "i";
    setScreenValue(String(result)); 
}

const sum = () => {
    if(value == "") return;
    calcResult();
    operand = "+";
}

const minus = () => {
    if(value == "") return;
    calcResult();
    operand = "-"
}

const times = () => {
    if(value == "") return;
    calcResult();
    operand = "*"
}

const divide = () => {
    if(value == "") return;
    calcResult();
    operand = "/"
}


const calcResult = () => {
        if (operand == "+" || operand == "i"){
            result += Number(value);
            }
        else if (operand == "-"){
            result -= Number(value);
            }
        else if (operand == "*"){
            result *= Number(value);
            }
        else if (operand == "/"){
            result /= Number(value);
            }
        else return;
    
    setScreenValue(String(result));
    value = "";
    operand= "";
}

element("numberZero").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberOne").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberTwo").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberThree").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberFour").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberFive").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberSix").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberSeven").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberEight").addEventListener("click", (e) => {setNumberToValue(e)});
element("numberNine").addEventListener("click", (e) => {setNumberToValue(e)});
element("decimal").addEventListener("click", (e) => {setNumberToValue(e)});
element("sum").addEventListener("click", () => {sum()});
element("minus").addEventListener("click", () => {minus()});
element("times").addEventListener("click", () => {times()});
element("divide").addEventListener("click", () => {divide()});
element("result").addEventListener("click", () => {calcResult()});
element("clear").addEventListener("click", () => {clearMemory()});