class Hex {
    constructor(x) {
        this.param = x;
    }

    valueOf() {
        return this.param;
    }

    plus(obj) {
        let result = this.param + Number(obj.valueOf());

        return new Hex(result);
    }

    minus(obj) {
        let result = this.param - Number(obj.valueOf());

        return new Hex(result);
    }

    toString() {
        return '0x' + this.param.toString(16).toUpperCase();
    }

    parse(str) {
        return parseInt(str, 16);
    }
}