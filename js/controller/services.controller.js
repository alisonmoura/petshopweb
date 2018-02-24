class ServicesController {
    showForm() {
        document.querySelector("form").classList.remove("hide");
    }

    save() {
        document.querySelector("form").classList.add("hide");
    }

    cancel() {
        document.querySelector("form").classList.add("hide");
    }
}

var servicesController = new ServicesController();