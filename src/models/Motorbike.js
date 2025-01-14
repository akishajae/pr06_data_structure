class Motorbike extends Vehicle {
    constructor(model, traction, minSpeed, maxSpeed) {
        super(model);
        super(minSpeed);
        super(maxSpeed);

        this.traction = super(traction);
        switch (traction) {
            case 'soft':
                traction = 0;
                break;
            case 'medium':
                traction = 2;
                break;
            case 'hard':
                traction = 5;
                break;
        }
    }

    moveForward() {
        // moves to left
        return movement = super.moveForward() + this.traction;
    }

    // function control if falls or not
    hasFallen() {
        // get weather
        return false;
    }
}