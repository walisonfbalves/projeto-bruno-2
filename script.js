function cadastrarCliente(){
    var nome = document.getElementById("nome")
    var rg = document.getElementById("RG")
    var cpf = document.getElementById("CPF")
    var agencia = document.getElementById("agencia")
    var conta = document.getElementById("conta")

    var dados = localStorage.getItem("dadosCliente");
    
    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    
    }
}
