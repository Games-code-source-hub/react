class Animal {
    constructor(type = "", scale = "", color = "") {
        this.scale = scale;
        this.color = color;
        this.type = type;

    }

    info() {
        console.log(this.type + " is " + this.color + " and " + this.scale + ".");
    }
}

class Dog extends Animal {
    constructor(type, scale, color, kind = "") {
        super(type, scale, color, kind)
        this.kind = kind;
    }

    getDog() {
        console.log("It's " + this.kind);
    }
}

const Ginger = new Dog("dog", "huge", "black", "labrador")

Ginger.info()
Ginger.getDog()

class Duck extends Animal {
    constructor(type, scale, color, wingspan = 0) {
        super(type, scale, color, wingspan)
        this.wingspan = wingspan;
    }

    getDuck() {
        console.log("Duck's wingspan is " + this.wingspan + " cm");
    }
}

const Donald = new Duck("duck", "moderate", "white", 81)

Donald.info()
Donald.getDuck()

class Chipmunk extends Animal {
    constructor(type, scale, color, food = "") {
        super(type, scale, color, food)
        this.food = food;
    }

    getChipmunk() {
        console.log("Chipmunk eats " + this.food);
    }
}

const Chip = new Chipmunk("chimpunk", "small", "brown", "nuts")

Chip.info()
Chip.getChipmunk()