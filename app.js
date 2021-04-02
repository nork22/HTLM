var name = document.getElementById('name');
var sobrenome = document.getElementById('sobrenome');
var email = document.getElementById('email');
var error = document.getElementById('error');

error.style.color = 'red' ;
function enviarformulario(){
 console.log('enviando formulario...');

    var mensajesError = [];

    if (Name.value === null|| Name.value ===''){ 
    mensajesError.push('ingresa teu name');

}

    if (sobrenome.value === null|| sobrenome.value ===''){ 
    mensajesError.push('ingresa teu sobrenome');
}
    
    if (e-mail.value === null|| e-mail.value ===''){ 
        mensajesError.push('digite seu e-mail ') 
    
}

     error.innerHTML = mensajesError.Join(', ');

    return false;

}

  var form=document.getElementById('formulario');
    form.addEventListener('submit', function(evt){ 
    evt.preventDefault();
    var mensajeserror=[];
    
    
    if(Name.value===null||Name.value === ''){
        mensajeserror.push('ingrese seu nome');
    } 
    
        if(sobrenome.value === null||sobrenome.value=== ''){
            mensajeserror.push('ingrese seu sobrenome');
    
   }  
    
        if(e-mail.value === null||e-mail.value ===''){ 
         mensajeserror.push('por favor prencher e-mail');

    }
    
            error.innerHTML=mensajeserror.Join(',');

            });