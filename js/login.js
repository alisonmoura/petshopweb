function login(){
    
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputPassword").value;

    if(email != "" && senha != ""){
        return true;
    }else{
        window.alert("Algo deu errado, redigite seu e-mail e senha");
        return false;
    }

}