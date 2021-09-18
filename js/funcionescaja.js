function mostrarFiguras(){
    var num = document.getElementById("numero").value;
    var color = document.getElementsByName("opcion");

    cu="";

    for(var i=0; i< color.length; i++){
        if(color[i].checked){
            var proceso = color[i].value;
        }
    }
    switch(proceso){
        case 'a':
            for(var i = 0; i < num;i++){
                cu += "<div style='height: 50px; width:50px; background:green; display: inline-block; margin: 5px;'></div>";
            }
        
            document.getElementById("resultado").innerHTML = cu;
        break;

        case 'b':
            for(var i = 0; i < num;i++){
                cu += "<div style='height: 50px; width:50px; background:white; display: inline-block; margin: 5px;'></div>" 
            }
        
            document.getElementById("resultado").innerHTML = cu;
        break;

        case 'c':
            for(var i = 0; i < num;i++){
                cu += "<div style='height: 50px; width:50px; background:red; display: inline-block; margin: 5px;'></div>" 
            }
        
            document.getElementById("resultado").innerHTML = cu;
        break;
    } 
}