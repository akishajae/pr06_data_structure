class Vehicle {
    #model;
    #traction;
    #minSpeed;
    #maxSpeed;

    constructor(model, traction) {
        this.#model = model;
        this.#traction = traction;
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
}