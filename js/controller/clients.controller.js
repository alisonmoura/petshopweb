var app = new Vue({
    el: '#app',
    data: {
        showForm: false,
        client: {},
        clients: [
            {
                id: 1,
                name: "Jão da Silva",
                email: "jao@gmail.com",
                cel: "67 99999999",
                cpf: "897897298743"
            },
            {
                id: 2,
                name: "Maria da Silva",
                email: "mar@gmail.com",
                cel: "67 89999999",
                cpf: "837897298743"
            },
            {
                id: 3,
                name: "Zé da Silva",
                email: "ze@gmail.com",
                cel: "67 99599999",
                cpf: "893897298743"
            }
        ]
    },
    methods: {
        save: function () {
            if (this.client.id) {
                for (var i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].id == this.client.id) {
                        this.clients[i] = this.client;
                        break;
                    }
                }
            } else {
                // Gerar um novo id
                this.client.id = this.clients.length+1;
                this.clients.push(this.client);
            }
            this.showForm = false;
            this.client = {};
        },
        cancel: function () {
            this.client = {};
            this.showForm = false;
        },
        clean: function () {
            this.client = {};
        },
        edit: function (client) {
            this.showForm = true;
            this.client = client;
        }
    }
})