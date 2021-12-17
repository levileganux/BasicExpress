$(document).ready(function(){
    var operandoa;
    var operandob;
    var tipooperation; 

    $('.numero').click(function(){
        let valor = this.value 
        console.log(valor)

        let inputVal = $('#resultado').val()
        console.log(inputVal)

        inputVal = inputVal + valor

        $('#resultado').val(inputVal)

        
    })
    $('.signo').click(function(){
        let valor = this.value 
        console.log(valor)

        tipooperation = valor

        let inputVal = $('#resultado').val()
        console.log(inputVal)

        inputVal = inputVal + valor

        $('#resultado').val(inputVal)

    })

    let resetear = function (){
        $("#resultado").html("");
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    //Operaciones.
    $('.igual').click(function () {
        var res
        let val = this.value
        let numbers
        console.log(val)

        let inputValue = $('#resultado').val()
        console.log(inputValue)
        console.log(tipooperation)
       
        
        switch(tipooperation){
            case '-':
                numbers = inputValue.split("-")
                res = parseFloat(numbers[0]) - parseFloat(numbers[1])
                break;
            case '*':
                numbers = inputValue.split("*")
                res = parseFloat(numbers[0]) * parseFloat(numbers[1]);
                break;
            case '+':
                numbers = inputValue.split("+")
                res = parseFloat(numbers[0]) + parseFloat(numbers[1]);
                break;
            case '/':
                numbers = inputValue.split("/")
                res = parseFloat(numbers[0]) / parseFloat(numbers[1]);
                break;
            }
        
        
        $("#result").val(res);
        resetear();
       
    })
   
    //LIMPIAR
    $(".limpiar").click(function(){
        $("#resultado").val(' ');
        $("#result").val(' ');
    });
})