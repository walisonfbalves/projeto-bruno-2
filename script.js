
function mascaraCPF(i){
   
    apenasNumeros(i)

    var v = i.value;
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function apenasNumeros(i){

    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
 }

 
function Guid(arg) {
    var s4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    if (arg == "N") {
        return (s4() + s4() + "" + s4() + "4" + s4().substr(0, 3) + "" + s4() + "" + s4() + s4() + s4()).toLowerCase();
    }
    if (arg == "C") {
        return ("call" + s4() + s4() + "").toLowerCase();
    }
    return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toLowerCase();
}

//
function inserirCliente(){

    var clientes;
    var index;

    var numeroQueNaoSeRete = Guid("N");
    
    //peguei a tabela pelo id
    clientes = document.getElementById("tbCliente");

    // ver quantas linhas tem a tabela
    var qtdLinhas = clientes.rows.length;

    // Inserindo uma linha, e depois da ultima linha inserir uma nova
    var linha = clientes.insertRow(qtdLinhas);

    var numeroQueNaoSeRete;

    //cria propriedade artifical 
    document.getElementById("tbCliente").rows[qtdLinhas].setAttribute("id", numeroQueNaoSeRete);


    // Inserindo as colunas

    var cellbotoes = linha.insertCell(0);
    var cellID = linha.insertCell(1);
    var cellNome = linha.insertCell(2);
    var cellRG = linha.insertCell(3);
    var cellCPF = linha.insertCell(4);
    var cellAgencia = linha.insertCell(5);
    var cellConta = linha.insertCell(6);

    cellbotoes.innerHTML = '<input class="botao" type="button" value="x" title="Excluir" onclick="javascript:excluirCliente(\'' + numeroQueNaoSeRete + '\')" > <input class="botao" title="alterar" type="button" value="a" onclick="javascript:carregarDadosParaAlterar('  + qtdLinhas+ ')"> ';

    cellID.innerHTML = qtdLinhas;
    cellNome.innerHTML = document.form.nome.value;
    cellRG.innerHTML = document.form.rg.value;
    cellCPF.innerHTML = document.form.cpf.value;
    cellAgencia.innerHTML = document.form.agencia.value;
    cellConta.innerHTML = document.form.conta.value;
    
    limparDados();

    return;
}

function carregarDadosParaAlterar( linha ) {

    //peguei a tabela pelo id
     var clientes = document.getElementById("tbCliente");

    // função para poder alterar os clientes
     document.getElementById("id").value = linha;
     document.getElementById("nome").value = clientes.rows[linha ].cells[2].innerText;
     document.getElementById("rg").value = clientes.rows[linha].cells[3].innerText;
     document.getElementById("cpf").value = clientes.rows[linha].cells[4].innerText;
     document.getElementById("agencia").value = clientes.rows[linha ].cells[5].innerText;
     document.getElementById("conta").value = clientes.rows[linha ].cells[6].innerText;

     document.getElementById("acao").innerHTML =  "Editando a linha: " + linha  ;

     document.getElementById('inserir').style.display = 'none';
     document.getElementById('alterar').style.display = 'inline';
     document.getElementById('cancelar').style.display = 'inline';

   return;
}

// salva a alteração
function fAlterar() {

    //peguei a tabela pelo id
    var clientes = document.getElementById("tbCliente");
    var linha  = document.getElementById("id").value;

    // função para poder alterar os clientes
     clientes.rows[linha ].cells[2].innerText = document.getElementById("nome").value;
     clientes.rows[linha ].cells[3].innerText = document.getElementById("rg").value ;
     clientes.rows[linha ].cells[4].innerText = document.getElementById("cpf").value;
     clientes.rows[linha ].cells[5].innerText = document.getElementById("agencia").value ;
     clientes.rows[linha ].cells[6].innerText = document.getElementById("conta").value;

     // limpa os campos apos salvar a edição 
     limparDados();

     document.getElementById("acao").innerHTML =  "Sem ação";

   return;
}

function fCancelar(){

    document.getElementById("acao").innerHTML =  "novo";
    document.getElementById("id").value = "";
   
    limparDados();

    document.getElementById('inserir').style.display = 'inline';
    document.getElementById('alterar').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';

}


function excluirCliente( codigo ) {
   
   fCancelar();

    var clientes = document.getElementById("tbCliente");

    //função para excluir o cliente
    for(var i = 0; i < clientes.rows.length; i++)
    {
        if (clientes.rows[i].id == codigo ){
            clientes.deleteRow(i);
            return;
          }
    }
   
  // document.getElementById("tbCliente").deleteRow(linha );

   return;

}

function limparDados(){

    document.getElementById("nome").value = "";
    document.getElementById("rg").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("agencia").value = "";
    document.getElementById("conta").value = "";

   return;


}