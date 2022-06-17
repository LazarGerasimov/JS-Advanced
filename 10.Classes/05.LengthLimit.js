class Stringer{
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(number) {
        this.innerLength += number;
    }

    decrease(number) {
        if (this.innerLength - number < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= number;
        }
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return this.innerString;
        }
    }


}