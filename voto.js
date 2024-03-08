// Desenvolva um algoritmo que valida a idade das pessoas conforme as leis brasileiras de votação, retornando uma mensagemm com as condições

// 1. Não possui idade para votar
// 2. Voto facultativo 
// 2. Voto obrigatório 

//const idade = ?;


function validarIdadeParaVotar(idade) {
    if (idade < 16) {
        return "Não possui idade para votar";
    } else if (idade >= 16 && idade < 18) {
        return "Voto facultativo";
    } else if (idade >= 70) {
        return "Voto facultativo";
    } else {
        return "Voto obrigatório";
    }
}
 
const idade = 71;
const mensagem = validarIdadeParaVotar(idade);
console.log(mensagem);