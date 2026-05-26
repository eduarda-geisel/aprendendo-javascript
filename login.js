const form = document.getElementById("loginForm");

const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("senha");

const msgUser = document.getElementById("msgUser");
const msgSenha = document.getElementById("msgSenha");

const sucesso = document.getElementById("sucesso");


const usuarioCorreto = "admin";
const senhaCorreta = "12345";

form.addEventListener("submit", function(event){


  event.preventDefault();


  usuarioInput.classList.remove("erro");
  senhaInput.classList.remove("erro");

  msgUser.style.display = "none";
  msgSenha.style.display = "none";
  sucesso.style.display = "none";

  let valido = true;


  if(usuarioInput.value !== usuarioCorreto){
    usuarioInput.classList.add("erro");
    msgUser.style.display = "block";
    valido = false;
  }


  if(senhaInput.value !== senhaCorreta){
    senhaInput.classList.add("erro");
    msgSenha.style.display = "block";
    valido = false;
  }


  if(valido){
    sucesso.style.display = "block";

    alert("Login realizado com sucesso!");
  }

});