// interfaces (type x interface)
//type é voltado mais para tipar um objeto
type robot = {
    readonly id: number | string;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",
}
//interface já é mais voltado quando for trabalhar com classes
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 = {
    id: 2,
    name: "megaman",
    sayHello: function (): string {
        return `Se-ja bem vi-n-do, eu sou o ${this.name}`;
    }
}

// a propriedade readonly faz com que seja atribuido o valor só a primeira vez
// sendo logo após somente leitura, sem ser possível alteração.

console.log(bot1.id);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return "hello meu nome é" + this.name;
    }
}

const p1 = new Pessoa(1, "Takeo");
console.log(p1.sayHello());
console.log(bot2.sayHello());