

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        refrescarLogin();
    }else{
        alert('Error on login');
    }
}

function isLogged() {
    if (localStorage.getItem('name') == undefined) {
        return false;
    } else {
        return true;
    }
}

function logout() {
    localStorage.clear();
    refrescarLogin();
}

function ocultarAtributo(ide) {
    if (ide) {
        ide.setAttribute("hidden", true);
    }
}

function mostrarAtributo(ide) {
    if (ide) {
        ide.removeAttribute("hidden");
    }
}