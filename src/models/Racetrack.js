class Racetrack {
    #name;
    #weather;
    #trackLength;

    constructor(name, weather, trackLength) {
        this.#name = name;
        this.#weather = weather;
        this.#trackLength = trackLength;
    }

    get #name() {
        return this.#name;
    }
    set #name(name) {
        this.#name = name;
    }

    get #weather() {
        return this.#weather;
    }
    set #weather(weather) {
        this.#weather = weather;
    }

    get #trackLength() {
        return this.#trackLength;
    }
    set #trackLength(trackLength) {
        this.#trackLength = trackLength;
    }

}