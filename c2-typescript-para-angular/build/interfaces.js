"use strict";
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 2,
    name: "megaman",
    sayHello: function () {
        return `Se-ja bem vi-n-do, eu sou o ${this.name}`;
    }
};
console.log(bot1.id);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello meu nome é" + this.name;
    }
}
const p1 = new Pessoa(1, "Takeo");
console.log(p1.sayHello());
console.log(bot2.sayHello());
