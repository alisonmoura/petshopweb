class ClienteController {

    showForm() {
        document.querySelector("form").classList.remove("hide");
    }

    save() {

        var nome = document.getElementById("inputNome").value;
        var email = document.getElementById("inputEmail").value;
        var celular = document.getElementById("inputCelular").value;
        var cpf = document.getElementById("inputCpf").value;

        var tabela = document.getElementById("listTable").querySelector("tbody");
        var linha = document.createElement("tr");

        var colunaNome = document.createElement("td");
        var colunaEmail = document.createElement("td");
        var colunaCelular = document.createElement("td");
        var colunaCpf = document.createElement("td");
        var colunaAcao = document.createElement("td");

        var botaoEditar = document.createElement("button");
        var botaoRemover = document.createElement("button");
        var botaoDetalhes = document.createElement("button");

        botaoEditar.innerHTML = "Editar";
        botaoRemover.innerHTML = "Remover";
        botaoDetalhes.innerHTML = "Detalhes";

        colunaNome.innerHTML = nome;
        colunaEmail.innerHTML = email;
        colunaCpf.innerHTML = cpf;
        colunaCelular.innerHTML = celular;

        colunaAcao.appendChild(botaoEditar);
        colunaAcao.appendChild(botaoRemover);
        colunaAcao.appendChild(botaoDetalhes);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        linha.appendChild(colunaCelular);
        linha.appendChild(colunaCpf);
        linha.appendChild(colunaAcao);

        tabela.appendChild(linha);

        document.querySelector("form").classList.add("hide");
    }

    cancel() {
        document.querySelector("form").classList.add("hide");
    }

}

var clienteController = new ClienteController();