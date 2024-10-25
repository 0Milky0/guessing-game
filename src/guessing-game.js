
class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.half = Math.round((this.max - this.min)/2) + this.min
        return this.half
    }

    lower() {
        this.max = this.half
    }

    greater() {
        this.min = this.half
    }
}

module.exports = GuessingGame;
