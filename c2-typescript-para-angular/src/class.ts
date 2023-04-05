//classes

// modificadores de acesso: os mesmos do Java(public, private, protected)
class Character {
    // o ? torna não obrigatório
    protected name?: string
    readonly stregth: number 
    skill: number

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    //public é o default, private somente a classe pode acessar, private pode ser acessado por classes por herança
    public attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}


// Character superclass
//Magician subclass
class Magician extends Character{
    magicPoints:number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}


const pe1 = new Character("Ryu", 10, 98);
const pe2 = new Magician("Aeris", 10, 35, 80);
pe1.attack();
pe2.attack();