class Vehicle {
    #model;
    #traction;
    #minSpeed;
    #maxSpeed;

    constructor(model, traction, minSpeed, maxSpeed) {
        this.#model = model;
        this.#traction = traction;
        this.#minSpeed = minSpeed;
        this.#maxSpeed = maxSpeed;
    }

    get #model() {
        return this.#model;
    }
    set #model(model) {
        this.#model = model;
    }

    get #traction() {
        return this.#traction;
    }
    set #traction(traction) {
        this.#traction = traction;
    }

    get #minSpeed() {
        return this.#minSpeed;
    }
    set #minSpeed(minSpeed) {
        this.#minSpeed = minSpeed;
    }

    get #maxSpeed() {
        return this.#maxSpeed;
    }
    set #maxSpeed(maxSpeed) {
        this.#maxSpeed = maxSpeed;
    }

    moveForward() {
        return Math.floor(
            (Math.random() * this.#maxSpeed) + this.#minSpeed
        );
    }
}