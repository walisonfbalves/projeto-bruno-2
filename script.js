function inserirCliente(nome, rg, cpf, agencia, conta){

    var clientes, index;
    
    //peguei a tabela pelo id
    clientes = document.getElementById("tbCliente");

    // ver quantas linhas tem a tabela
    var qtdLinhas = clientes.rows.length;

    // Inserindo uma linha, e depois da ultima linha inserir uma nova
    var linha = clientes.insertRow(qtdLinhas);

    // Inserindo as colunas
    var cellID = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellRG = linha.insertCell(2);
    var cellCPF = linha.insertCell(3);
    var cellAgencia = linha.insertCell(4);
    var cellConta = linha.insertCell(5);

    cellID.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellRG.innerHTML = rg;
    cellCPF.innerHTML = cpf;
    cellAgencia.innerHTML = agencia;
    cellConta.innerHTML = conta;

    preencherCamposForm();
}

function salvarCliente(nome, rg, cpf, agencia, conta) {

    // função para poder alterar os clientes
    clientes.rows[index].cells[1].innerHTML = nome;
    clientes.rows[index].cells[2].innerHTML = rg;
    clientes.rows[index].cells[3].innerHTML = cpf;
    clientes.rows[index].cells[4].innerHTML = agencia;
    clientes.rows[index].cells[5].innerHTML = conta;

}

function preencherCamposForm() {

    // Loop para navergar nas linhas da tabela
    for(var i = 0; i < clientes.rows.length; i++)
    {
        clientes.rows[i].onclick = function()
        {
            index = this.rowIndex;
            document.getElementById("ID").value = clientes.rows[index].cells[0].innerText;
            document.getElementById("nome").value = clientes.rows[index].cells[1].innerText;
            document.getElementById("RG").value = clientes.rows[index].cells[2].innerText;
            document.getElementById("CPF").value = clientes.rows[index].cells[3].innerText;
            document.getElementById("agencia").value = clientes.rows[index].cells[4].innerText;
            document.getElementById("conta").value = clientes.rows[index].cells[5].innerText;
        }
    }
}

function excluirCliente() {

    //função para excluir o cliente
    for(var =i  0; i < clientes.rows.length; i++)
    {
        if (index == i)
            clientes.deleteRow(index);
            return;
    }
}
    