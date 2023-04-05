//generics
//servem para deixar para especificar na hora que for utilizar
function concatArray<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 4], [3, 2]);
const stgArray = concatArray<string[]>(["Takeo", "Yuahasi"], ["Edith", "Granja"]);
console.log(numArray);
console.log(stgArray);
