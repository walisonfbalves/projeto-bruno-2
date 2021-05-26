var itens = 0;

function adicionarItem() {
  itens += 1;

  var refNome = document.querySelector("#nome").value;
  var refCpf = document.querySelector("#cpf").value;
  var refRg = document.querySelector("#rg").value;

  var usuarioTr = document.createElement("tr");
  usuarioTr.className = itens %2 == 0 ? "linha1": "linha2";
  var selec = document.createElement('td');
  selec.className = 'usr';
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'check';
  selec.appendChild(input);
  var nomeTd = document.createElement("td");
  var cpfTd = document.createElement("td");
  var rgTd = document.createElement("td");

  nomeTd.textContent = refNome;
  cpfTd.textContent = refCpf;
  rgTd.textContent = refRg;

  usuarioTr.appendChild(selec);
  usuarioTr.appendChild(nomeTd);
  usuarioTr.appendChild(cpfTd);
  usuarioTr.appendChild(rgTd);    

  var tabela = document.querySelector("#tabela");

  tabela.appendChild(usuarioTr);
  }

function removerItem() {
  ckList = document.querySelectorAll("input[type=checkbox]");
  ckList.forEach(function(el, index) {
    if (ckList[index].checked) el.parentElement.parentElement.remove();
  });

  if (itens > 0) 
    itens -= 1;
}