class Tamagotchi {
    constructor (name) {
        this.name = name;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 0;
        this.alive = true; 
    }
}

function promptForName() {
    const petName = prompt("Please give your pet a name")
    const newPet = new Tamagotchi(petName);
}

window.onload = promptForName; 