class Character {
    #name;
    #vehicle;
    #stats;

    constructor(name, vehicle) {
        this.#name = name;
        this.#vehicle = vehicle;
        this.#stats = [];
    }

    get #name() {
        return this.#name;
    }
    set #name(name) {
        this.#name = name;
    }

    get #vehicle() {
        return this.#vehicle;
    }
    set #vehicle(vehicle) {
        this.#vehicle = vehicle;
    }

    get #stats() {
        return this.#stats;
    }
}