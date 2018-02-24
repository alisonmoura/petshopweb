class AnimalsController {

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

var animalsController = new AnimalsController();