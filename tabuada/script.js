/*
Exemplo de uma tabuada.
*/
// Declaração de uma função.
function calculaTabuada(){

//Obtendo do DOM o tbody da tabela.
    let tabuada = document.querySelector("#tabuada tbody");

//Obtendo o valor A do campo input number e convertendo em inteiro.
    let valorA = parseInt(document.querySelector("#valorA").value);

//Limpando o conteúdo do tbody.
    tabuada.innerHTML = '';

//Criando um laço de repetição de o à 10.
    for (let valorB = 0; valorB <=10; valorB++) {
    
//Calculando o resultado da linha atual.
        let resultado = valorA * valorB;

//Criando o template das colunas da linha atual.
        let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;
//Criando elemento tr
    let tr = document.createElement('tr');

//Inserindo as colunas na linha
    tr.innerHTML = template;

//Inserindo a linha na tabela.
    tabuada.append(tr);
    }//Fechando o for.
}//Fechando a função.

//Chamando função pela primeira vez.
calculaTabuada();

//Adicionado o evento de alteração ao campo número.
document.querySelector("#valorA").addEventListener('change', calculaTabuada);