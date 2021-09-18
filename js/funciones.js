function temasSeleccionado(){
    var x = document.getElementById("temas").value;
    //Inicializar imputs

    //Inicializar p e imprimir datos de la caja designada
    document.getElementById("resultado").innerHTML='¡Resultado!';

}
function mostrarDatos(){
    var letra = document.getElementById("letra").value;
    var num1 = document.getElementById("n1").value;
    //Convertir a un valor string en numero
    numInt=parseInt(num1);
    numFloat=parseFloat(num1);
    datos = 'Caracter :'+letra+' <br/>Número entero :'+numInt+' <br/>Número flotante :'+numFloat;
    document.getElementById("resultado").innerHTML = datos;
    //document.write('el numero entero es: '+numInt+ ' el numero flotante es: ' +numFloat);
    var mensaje = document.getElementById("resultado").innerHTML;
    alert(mensaje);

}
//Utilizar if para determinar si un numero es par o impar
function si(){
    //Declarar variables y recibir los datos de la vista
    var num = parseInt(document.getElementById("n2").value);
    var r = document.getElementsByName("opcion");

    for(var i=0; i< r.length; i++){
        if(r[i].checked){
            var e = r[i].value;
        }
    }
    switch(e){
        case 'a':
            var tipo = num % 2;
            if(tipo == 0){
                res= 'Es un numero par';
            }
            else{
                res= 'Es un numero impar';
            }
        break;

        case 'b':
            if(num >=18){
                res= 'Puede votar';
            }
            else{
                res= 'No puede votar';
            }
        break;
    }

    document.getElementById("resultado").innerHTML = res;
}
function factorialWhile(){
    var num = parseInt(document.getElementById("n3").value);
    fact = num;
    //multiplicando el numero por sus antecesores
    fact--;
    datos = num.toString() + '<br/>'+num.toString();
    while(fact>1){
        num = num * fact;
        //datos = datos + '*' + fact.toString();
        datos += ' * '+ fact.toString();
        fact--;
    }
    datos +='='+num.toString(); 
    document.getElementById("resultado").innerHTML = datos;
}
function arreglo(){
    var semana = new Array ('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado');
    var num = parseInt(document.getElementById('n5').value);
    //para hacer el recorrido de un arreglo utilizamos el forin
    for(dia in semana){
        //datos +=semana
        datos += semana[dia]+ ',';
    }
    datos = semana+'<br/> Dia'+num.toString()+ '='+ semana[num-1];
    document.getElementById("resultado").innerHTML=datos;
}