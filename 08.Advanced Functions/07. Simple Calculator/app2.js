function calculator () {

    function init(selector1, selector2, resultSelector) {
        this.num1 = document.querySelector(selector1);
        this.num2 = document.querySelector(selector2);
        this.result = document.querySelector(resultSelector);
    }

    function add() {
        this.result.value = Number(this.num1.value) + Number(this.num2.value);
    }

    function subtract() {
        this.result.value = Number(this.num1.value) - Number(this.num2.value);
    }

    return {
        init,
        add,
        subtract
    }

}