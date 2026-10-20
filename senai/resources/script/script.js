// let nomes = ["Paula Ribeiro", "Ana Julia", "Nayeon de Oliveira"]

// let contador = 0
// while(contador <=  20) {
//     console.log(contador)
//     contador = contador + 2
// }

// let nomes = ["Paula Ribeiro", "Ana Julia", "Israel de Oliveira"];
// let indice = 0;
// let encerrar = 0;

// while (encerrar < nomes.length) {
//     console.log(nomes[indice]);
//     nomes.splice(indice, 1);
//     console.log(nomes)
// }

// let nome = "admin";
// let resposta = "";

// while (resposta !== nome) {
//     resposta = prompt("Digite um nome:");
// }

// alert("Nome correto!");
// let nomes = ["Paula Ribeiro", "Ana Julia", "Nayeon de Oliveira", "Bruno Fernandes", "Zacarias"]

// nomes.sort();

// nomes.forEach(nome => {
//     console.log(nome);
// })
// let indice = nomes.indexOf ("Nayeon de Oliveira")
// nomes.splice(indice, 1);
// console.log(nomes)

let receitas = ["bolo de cenoura", "ovo cozido", "brigadeiro"];

let nome = prompt("Digite o nome da receita que deseja excluir:");

let indice = receitas.indexOf(nome);

switch (indice) {
    case -1:
        console.log("Receita não encontrada!");
        break;

    case 0:
        receitas.splice(indice, 1);
        break;

    case 1:
        receitas.splice(indice, 1);
        break;

    case 2:
        receitas.splice(indice, 1);
        break;
}

receitas.forEach(receita => {
    console.log(receita);
});

