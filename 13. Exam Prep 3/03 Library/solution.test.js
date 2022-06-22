let expect = require('chai').expect;

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};


describe("Library tests", () => {

    describe('calcPriceOfBook tests', () => {
        it('invalid input - name of the book', () => {
            expect(() => library.calcPriceOfBook(1, 2)).to.throw(`Invalid input`);
        });
        it('invalid input - year', () => {
            expect(() => library.calcPriceOfBook("1", "2")).to.throw(`Invalid input`);      // always () => if throwing
        });
        it('Valid data and year is below 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`)
        });
        it('Valid data and year is equal to 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`)
        });
        it('Valid data and year is greater than 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1990)).to.equal(`Price of The Little Prince is 20.00`)
        });

    });

    describe('findBook tests', () => {
        it("Invalid input - empty array", () => {
            expect(() => library.findBook([], "The Little Prince")).to.throw(`No books currently available`);
        });
        it("Valid input - available book", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal(`We found the book you want.`);
        });
        it("Invalid input - not available book", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Random")).to.equal(`The book you are looking for is not here!`);

        });
    });

    describe('arrangeTheBooks tests', () => {
        it("Invalid input - string", () => {
            expect(() => library.arrangeTheBooks("string")).to.throw('Invalid input');
        });
        it("Invalid input - negative number", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });
        it("Happy path - less than available space", () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it("Happy path - equal to the available space", () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("Happy path - more than available", () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });

})

