function mostrarDatos(){
    var f = document.getElementsByName("frio");
    for(var i=0; i< f.length; i++){
        if(f[i].checked){
            var fri = f[i].value;
        }
    }
    var p = document.getElementsByName("pizza");
    for(var i=0; i< p.length; i++){
        if(p[i].checked){
            var pizz = p[i].value;
        }
    }
    var c = document.getElementsByName("cafe");
    for(var i=0; i< c.length; i++){
        if(c[i].checked){
            var caf = c[i].value;
        }
    }
    var l = document.getElementsByName("leer");
    for(var i=0; i< l.length; i++){
        if(l[i].checked){
            var lee = l[i].value;
        }
    }
    var ll = document.getElementsByName("lluvia");
    for(var i=0; i< ll.length; i++){
        if(ll[i].checked){
            var lluvi = ll[i].value;
        }
    }
    datos = 'El frio te gusta : '+fri+'<br/>La pizza te gusta : '+pizz+'<br/>El cafe te gusta : '+caf+'<br/>Te gusta leer : '+lee+'<br/>La lluvia te gusta : '+lluvi;
    document.getElementById("resultado").innerHTML = datos;

}