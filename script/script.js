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
        }, 6000);

        this.hungerIntervalID = setInterval(() => {
            this.incrementHunger();
            displayMetrics();
            this.checkIfDead();
        }, 6000);

        this.sleepinessIntervalID = setInterval(() => {
            this.incrementSleepiness();
            displayMetrics();
            this.checkIfDead();
        }, 6000);

        this.boredomIntervalID = setInterval(() => {
            this.incrementBoredom();
            displayMetrics();
            this.checkIfDead();
        }, 6000);
    
    }

    checkIfDead() {
        if (this.hunger >= 10 && this.sleepiness >= 10 && this.boredom >= 10) {
            alert(`${this.name} has died!`);
            this.resetMetrics();
            promptForName();
        }
    }

    resetMetrics() {
        this.hunger = 5;
        this.sleepiness = 5;
        this.boredom = 5;
        this.age = 0;
    }

    incrementAge() {
        this.age++;
        if (this.age === 3 || this.age === 6 || this.age === 9) {
            changeImage(this.age);
        }
    }

    feed() {
        if (this.hunger > 0) {
            this.hunger--;
        }
        displayMetrics();
        this.checkIfDead();
    }

    play() {
        if (this.boredom > 0) {
            this.boredom--;
        }
        displayMetrics();
        this.checkIfDead();
    }

    sleep() {
        if (this.sleepiness > 0) {
            this.sleepiness--;
        }
        displayMetrics();
        this.checkIfDead();
    }
    incrementHunger() {
        this.hunger++;
    }
    
    incrementSleepiness() {
        this.sleepiness++;
    }
    
    incrementBoredom() {
        this.boredom++;
    }
}

let pet;

function CreateTamagotchi(name) {
    return new Tamagotchi(name)
}



function promptForName() {
    const petName = prompt("Please give your pet a name");
    if (petName) {
        document.getElementById("user-name").textContent = `${petName}`;
        pet = new Tamagotchi(petName);
        displayMetrics();
    }
}

function changeImage(age) {
    const littleOtterImage = document.getElementById("little-otter");

    if (age === 3) {
        littleOtterImage.src = 'https://cdn4.vectorstock.com/i/1000x1000/46/08/cartoon-otter-standing-on-stone-vector-36464608.jpg';
    } else if (age === 6) {
        littleOtterImage.src = 'https://img.freepik.com/free-vector/otter-catching-fish-cartoon-character_1308-93273.jpg';
    } else if (age === 9) {
        littleOtterImage.src = 'https://pm1.aminoapps.com/6719/0d263fa368f3148353a538808b65ac1812607b55_hq.jpg';
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

window.onload = promptForName; 
