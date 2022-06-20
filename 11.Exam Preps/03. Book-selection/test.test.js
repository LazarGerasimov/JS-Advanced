const expect = require('chai').expect;

const bookSelection = {
    isGenreSuitable(genre, age) {
      if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
        return `Books with ${genre} genre are not suitable for kids at ${age} age`;
      } else {
        return `Those books are suitable`;
      }
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let result = budget - price;
  
      if (result < 0) {
        return "You don't have enough money";
      } else {
        return `Book bought. You have ${result}$ left`;
      }
    },
    suitableTitles(array, wantedGenre) {
      let resultArr = [];
  
      if (!Array.isArray(array) || typeof wantedGenre !== "string") {
        throw new Error("Invalid input");
      }
      array.map((obj) => {
        if (obj.genre === wantedGenre) {
          resultArr.push(obj.title);
        }
      });
      return resultArr;
    },
  };
  

describe('Test', () => {                                           // will work with 1 describe as well, we do it for comfort
    describe('isGenreSuitable', () => {
        it('happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 10)).to.equal('Those books are suitable');

        });
        it('inappropriate genre for the age', () => {
          expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
          expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        });
        it('inappropriate genre for the age, edge case', () => {
          expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
          expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
    });

    describe('isItAffordable', () => {
        it('happy path', () => {
          expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left');
        });
        it('happy path edge case', () => {
          expect(bookSelection.isItAffordable(1, 1)).to.equal('Book bought. You have 1$ left');
        });
        it('not enough money', () => {
          expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
        });
        it('invalid input', () => {
          expect(() => bookSelection.isItAffordable("2", 1)).to.throw('Invalid input');           // !! needs to come as ann function to it can throw na error
          expect(() => bookSelection.isItAffordable(2, "1")).to.throw('Invalid input');           // !! needs to come as ann function to it can throw na error
          expect(() => bookSelection.isItAffordable("2", "1")).to.throw('Invalid input');         // !! needs to come as ann function to it can throw na error
        });
    });

    describe('suitableTitles', () => {
        it('happy path single match', () => {
          expect(bookSelection.suitableTitles([{
              title: 'aa',
              genre: 'a'
            }], 'a')).to.deep.equal(['aa']);          // always TO.DEEP.EQUAL when comparing arrays as they have reference values in the heap
        });
        it('happy path two matches', () => {
          expect(bookSelection.suitableTitles([{
              title: 'aa',
              genre: 'a'
            }, {
              title: 'ab',
              genre: 'a'
            }, {
              title: 'bb',
              genre: 'b'
            }], 'a')).to.deep.equal(['aa', 'ab']);          // always TO.DEEP.EQUAL when comparing arrays as they have reference values in the heap
        });
        it('no match', () => {
          expect(bookSelection.suitableTitles([{
              title: 'aa',
              genre: 'a'
            }], 'a')).to.deep.equal([]);          // always TO.DEEP.EQUAL when comparing arrays as they have reference values in the heap
        });
        it('invalid input', () => {                        // hedging the bets
          expect(() => bookSelection.suitableTitles('aaab', 'a')).to.throw('Invalid input');          // always TO.DEEP.EQUAL when comparing arrays as they have reference values in the heap
          expect(() => bookSelection.suitableTitles([{
            title: 'bb',
            genre: '5'
          }], 5)).to.throw('Invalid input') 
        });
    });
}); // main describe closing bracket
 