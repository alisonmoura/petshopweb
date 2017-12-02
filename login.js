function login(){
    
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputPassword").value;

    if(email != "" && senha != ""){
        return true;
    }else{
        window.alert("Digite seu email e senha");
        return false;
    }

}