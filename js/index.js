//Declarar variables
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//Leyendo eventos
formulario.addEventListener('submit', login);

//Funciones

function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('Verifica tuscampos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));


        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje('Logincorrecto', 'success');
            localStorage.setItem('sesion', 'activa');
            setTimeout(function() {
                window.open('./inicio.html', '_self');
            },2000);
            
        }
        else{
            creaMensaje('Usuario icorrecto', 'danger');
        }
    }
    else{
        creaMensaje('No hay usuarios registrados', 'danger');
    }


}