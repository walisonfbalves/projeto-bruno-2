class Cliente {

    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    }

    salvar() {

        let cliente = this.lerDados();

        if(this.validaCampos(cliente)) {
            this.adicionar(cliente);
        }

        this.listaTabela();
        
    }

    listaTabela() {

        let tbody = document.getElementById("tbody")
        
        for(let i = 0; i < this.arrayClientes.length; i++) {

            tbody.innerText = "";

            let tr = tbody.insertRow();

            let td_id = tr.insertRow();
            let td_nome = tr.insertRow();
            let td_rg = tr.insertRow();
            let td_cpf = tr.insertRow();
            let td_agencia = tr.insertRow();
            let td_conta = tr.insertRow();
            let td_acoes = tr.insertRow();

            td_id.innerText = this.arrayClientes[i].id;
            td_nome.innerText = this.arrayClientes[i].nome;
            td_rg.innerText = this.arrayClientes[i].rg;
            td_cpf.innerText = this.arrayClientes[i].cpf;
            td_agencia.innerText = this.arrayClientes[i].agencia;
            td_conta.innerText = this.arrayClientes[i].conta;
            td_acoes.innerText = this.arrayClientes[i].acoes;
        }
    }

    adicionar(cliente) {
        this.arrayClientes.push(cliente);
        this.id++;
    }


    lerDados() {
        let cliente = {}

        cliente.id = this.id;
        cliente.nome = document.getElementById('nome').value;
        cliente.rg = document.getElementById('rg').value;
        cliente.cpf = document.getElementById('cpf').value;
        cliente.agencia = document.getElementById('agencia').value;
        cliente.conta = document.getElementById('Conta').value;

        return cliente;
    }

    validaCampos(cliente) {
        let msg = "";

        if(cliente.nome == '') {
            msg += " - Informe o nome do cliente \n";
        }

        if(cliente.rg == '') {
            msg += " - Informe o RG do cliente \n";
        }

        if(cliente.cpf == '') {
            msg += " - Informe o CPF do cliente \n";
        }

        if(cliente.agencia == '') {
            msg += " - Informe a agência do cliente \n";
        }

        if(cliente.conta == '') {
            msg += " - Informe a conta do cliente \n";
        }
        
    }

    cancelar() {
        document.getElementById('nome').value = "";
        document.getElementById('rg').value = "";
        document.getElementById('cpf').value = "";
        document.getElementById('agencia').value = "";
        document.getElementById('conta').value = "";
    }
}

    var cliente = new Cliente();
