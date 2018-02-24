class ClienteController {

    showForm() {
        document.querySelector("form").classList.remove("hide");
    }

    save() {
        document.querySelector("form").classList.add("hide");
    }

    cancel() {
        for (var i = 0; i < document.forms[0].getElementsByTagName("input").length; i++) {
            document.forms[0].getElementsByTagName("input")[i].value = "";
            
        }
        document.querySelector("form").classList.add("hide");
    }

}

var clienteController = new ClienteController();