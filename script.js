//AULA OBJETOS

//CRIANDO UM OBJETO:
/*const estudante = {
    nome: "Chayenne Mayara",
    sobrenome: "Souza",
    numeroMatricula: 4520523,
    notasDoSemestre:[9,8,9]
}
console.log("Antes da adição", estudante)
estudante.modulo = "Módulo: Git e terminal" // método de adicionar, criar ou alterar valor a um objeto
console.log("Depois da adição do 'módulo'", estudante)

//IMPRIMINDO PROPRIEDADES ESPECÍFICAS
console.log("Nome:", estudante.nome)//PODE CHAMAR NO CONSOLE TANTO COM O USO DO PONTO
console.log("Segunda nota:", estudante.notasDoSemestre[1]) //ACESSAR UM ÍNDICE DO ARRAY DENTRO DO OBJETO
console.log("Módulo:", estudante["modulo"]) // QUANTO COM O USO DE COCHETES

//COPIANDO OBJETO COM SPREAD

const novoEstudante = {... estudante}

//MUDANDO AS PROPRIEDADES DE UMA CÓPIA SPREAD
//const novoEstudante = {... estudante, "Astrodev"}

//OU
//novoEstudante.nome = "Astrodev"
novoEstudante.notasDoSemestre = [...estudante.notasDoSemestre, 10]
//OU
//novoEstudante.notasDoSemestre = estudante.notasDoSemestre.slice()
//novoEstudante.notasDoSemestre.push(7)

novoEstudante["modulo"] = "Introdução à web"

console.log("Depois da cópia com 'SPREAD'", novoEstudante)

//CRIANDO ARRAY DE OBJETOS

const estudantesLabenu = []
estudantesLabenu.push(estudante, novoEstudante)
console.log("ARRAY 1ª POSIÇÃO" estudantesLabenu[0].nome) //ACESSA ARRAY E OBJETOS
console.log("ARRAY 1ª POSIÇÃO" estudantesLabenu[0].notasDoSemestre[2]) //ACESSA NOME E NOTAS
console.log("ARRAY 1ª POSIÇÃO" estudantesLabenu[0]) // ACESSA UM ARRAY ESPECÍFICO
console.log("ARRAY 2ª POSIÇÃO" estudantesLabenu[1]) // ACESSA UM ARRAY ESPECÍFICO
console.log("ARRAY INTEIRO" estudantesLabenu)*/



//EXERCÍCIO DE FIXAÇÃO

const carrinho = {
    nome: "João",
    formaPagamento: "cartão de crédito",
    endereço: "Rua 13, casa 8, Só os loucos sabem"
}
console.log("Impressão inicial", carrinho)

carrinho.compras = [{ //criando uma constanque chamada "compras" com o ponto dentro da variável "carrinho"
    nomeProduto: "Roteador Biridin",
    preço: "R$ 745,63",
    quantidade: 2,},

    {nomeProduto: "Mouse",
    preço: "R$ 135,00",
    quantidade: 1}
]
console.log(carrinho.nome) //acessa objeto específico
//compras.push(carrinho) // inseri os objetos pelo PUSH em carrinhos, está correto?
console.log("Depois de adicionar COMPRAS", carrinho)
console.log("Impressão quantidade de compras no carrinho", carrinho.compras.length) //chama o array dentro da variáve | length funciona APENAS para ARRAYS e STRINGS

const carrinhoPresente = {...carrinho}
carrinhoPresente.nome = "Maria"
carrinhoPresente.formaPagamento = "cartão de Presente"
console.log("Impressão carrinho de presente:", carrinhoPresente)

