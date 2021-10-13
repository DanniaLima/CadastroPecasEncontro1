let peso = 100;

if (peso >= 100) {
    console.log("A peça possui o peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso minimo") 
}


let listaPecas = ["amortecedor","disco de freio","pneus","cambio","bateria","radiador","correia","step","ignicao","freagem"];

console.log("Exemplo: A minha primeira peça da lista é: " + listaPecas[0]); //exemplo de mostrar os itens da lista usando a posição do array

let numeroPecas = listaPecas.length; 

if (numeroPecas < 10) {
    console.log("A lista ainda possui espaço para cadastro de peças")  
} else {
    console.log("Não há mais espaço disponivel para cadastro de peças, a lista já atingiu a capacidade máxima")
}


//let nomePeca = "embreagem" //string
let nomePeca = listaPecas[0];

if (nomePeca.length > 3) {
    console.log("Nome de peça é valido, pode seguir com o cadastro.")  
} else {
    console.log("Nome da peça é invalido, o nome deve ter mais de 3 caracteres.")
}











