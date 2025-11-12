
const form = document.getElementById("formulario");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validaFormulario();
} )

function validaFormulario(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById("nome").value; 

    let mensagemErro = "";

    if(!email){
        mensagemErro += "Email é obrigatório.\n";
    } else if(!/^\S+@\S+\.\S+$/.test(email)){
        mensagemErro += "Email enválido.\n";
    }

    if(senha.length < 8){
        mensagemErro += "A senha deve ter pelo menos 8 caracteres.\n";
    }
 
    if(nome == ""){
        mensagemErro += "Nome é obrigatório"
    }
  
if(mensagemErro){
document.getElementById('mensagemErro').textContent = mensagemErro;

return false;
} else {
    alert("Formulário validado com sucesso!")
}
}