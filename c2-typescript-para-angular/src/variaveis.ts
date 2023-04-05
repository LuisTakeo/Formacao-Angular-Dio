// variaveis

// primitivos: boolean number e string
let empregado:boolean = false;
let idade:number = 31;
let nome:string = "Takeo";
let altura:number = 1.90;

// especiais: null / undefined
// podem ser usados quando não quiser que bote nenhum valor dentro deles
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abrangentes: any, void
function executaAlgo():void{};
let returno: void;
let returnoView:any = false;

//objeto - sem previsibilidade
let produto:object = {
    name: "Takeo",
    cidade: "sp",
    idade: 30,
}
//objeto tipado - previsivel
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
}

// arrays

let dados:string[] = ['Takeo', 'Edith', 'Chicão'];
let dados2: Array<string> = ['Takeo', 'Edith', 'Chicão'];

//array multi types
let infos: (string | number)[] = ["Takeo", 31, "Edith", 31, "Chicão", 28];

//tuplas
let boleto:[string, number, number] = ["Água", 35.99, 2324124];

// arrays métodos
// .map, .reduce, todos os que já tem no javascript

//datas

let aniversario:Date = new Date("1991-09-06 07:00");
console.log(aniversario.toString());