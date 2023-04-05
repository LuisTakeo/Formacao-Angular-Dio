function addNumber(x: number, y: number):number{
    return x + y;
}
//se não passarmos o tipo de retorno, ele retornará baseado no return
function addToHello(name: string){
    return `Olá ${name}!`;
}
// funções podem aceitar mais de um tipo
function callToPhone(phone: number | string): number | string {
    return phone;
}

// sempre que usar function do tipo async deve se retornar uma promise com o valor desejado
async function getDatabase(id: number): Promise<string | number> {
    return "Takeo";    
}


let soma: number = addNumber(4, 1);
console.log(soma);
console.log(addToHello("Takeo"));
console.log(callToPhone(11961261959));
getDatabase(1).then(nome => console.log(nome));