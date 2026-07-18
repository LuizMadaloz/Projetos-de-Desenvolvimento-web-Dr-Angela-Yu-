function calculadora(num1,num2,operador){
    return operador(num1,num2)
};
function multiplicar(num1,num2){
    return num1 *num2
};
function somar(num1,num2){
    return num1 +num2
};
function subtracao(num1,num2){
    return num1 - num2
};
function divisao(num1,num2){     
     return num1 / num2
};
function Valida(){

    var n1 = parseFloat(document.getElementById("number1").value);
    var n2 = parseFloat(document.getElementById("number2").value);
    var oper = document.getElementById("operacao").value;
    if (oper === "somar"){
        oper = somar
    }else if(oper === "multiplicar"){
        oper = multiplicar
    }else if(oper === "subtracao"){
        oper = subtracao
    }else if(oper === "divisao"){
        oper = divisao
    }
     var resultadofinal = oper(n1,n2);
     document.getElementById("resultado").innerText = "Resultado: " + resultadofinal;

}
