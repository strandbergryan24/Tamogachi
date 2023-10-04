class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 5;
        this.sleepiness = 5;
        this.boredom = 5;
        this.age = 0;
        this.alive = true;

        this.ageIntervalID = setInterval(() => {
            this.incrementAge();
            displayMetrics();
        }, 60000);
    }


    incrementAge() {
        this.age++;
    }

    feed() {
        if (this.hunger > 0 ) {
            this.hunger--;
        }
        displayMetrics();
    }

    play() {
        if (this.boredom > 0 ) {
            this.boredom--;
        }
        displayMetrics();
    }

    sleep() {
        if (this.sleepiness > 0 ) {
            this.sleepiness--;
        }
        displayMetrics();
    }
}

let pet;

function CreateTamagotchi(name) {
    return new Tamagotchi (name)
}

function promptForName() {
    const petName = prompt("Please give your pet a name");
    if (petName) {
        document.getElementById("user-name").textContent = `${petName}`;
        pet = new Tamagotchi(petName);
        displayMetrics();
    }
}

function displayMetrics() {
    const petMetrics = document.querySelector(".petMetrics");
    const currentPet = pet;

    if (currentPet) {
        petMetrics.innerHTML =
    `<ul>
        <li>Hunger: ${pet.hunger}</li>
        <li>Boredom: ${pet.boredom}</li>
        <li>Sleepiness: ${pet.sleepiness}</li>
        <li>Age: ${pet.age}</li>
    </ul>
    `;
    }
}

function feedPet() {
    if (pet) {
        pet.feed();
    }
}

function playPet() {
    if (pet) {
        pet.play();
    }
}

function sleepPet() {
    if (pet) {
        pet.sleep();
    }
}

window.onload = promptForName(); 
