const form = document.getElementById("cadastroForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");

const msgNome = document.getElementById("msgNome");
const msgEmail = document.getElementById("msgEmail");
const msgSenha = document.getElementById("msgSenha");
const msgCpf = document.getElementById("msgCpf");
const msgTelefone = document.getElementById("msgTelefone");

const sucesso = document.getElementById("sucesso");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  let valido = true;

  const inputs = [nome, email, senha, cpf, telefone];

  inputs.forEach(function(input){
    input.classList.remove("erro");
    input.classList.remove("sucesso-input");
  });

  const mensagens = [
    msgNome,
    msgEmail,
    msgSenha,
    msgCpf,
    msgTelefone
  ];

  mensagens.forEach(function(msg){
    msg.style.display = "none";
  });

  sucesso.style.display = "none";

  if(nome.value.trim().length < 3){
    nome.classList.add("erro");
    msgNome.style.display = "block";
    valido = false;
  }else{
    nome.classList.add("sucesso-input");
  }

  if(!regexEmail.test(email.value)){
    email.classList.add("erro");
    msgEmail.style.display = "block";
    valido = false;
  }else{
    email.classList.add("sucesso-input");
  }

  if(senha.value.length < 6){
    senha.classList.add("erro");
    msgSenha.style.display = "block";
    valido = false;
  }else{
    senha.classList.add("sucesso-input");
  }

  if(!regexCpf.test(cpf.value)){
    cpf.classList.add("erro");
    msgCpf.style.display = "block";
    valido = false;
  }else{
    cpf.classList.add("sucesso-input");
  }

  if(!regexTelefone.test(telefone.value)){
    telefone.classList.add("erro");
    msgTelefone.style.display = "block";
    valido = false;
  }else{
    telefone.classList.add("sucesso-input");
  }

  if(valido){
    sucesso.style.display = "block";
    alert("Cadastro realizado com sucesso!");
  }

});
