"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 4], [3, 2]);
const stgArray = concatArray(["Takeo", "Yuahasi"], ["Edith", "Granja"]);
console.log(numArray);
console.log(stgArray);
