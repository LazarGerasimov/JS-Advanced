let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}



describe('test', () => {
    
    it('check whether first param type is valid', () => {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });
    it('check whether second param type is valid', () => {
        expect(lookupChar('String', 'String')).to.equal(undefined);
    });
    it('check whether second param type is valid integer', () => {
        expect(lookupChar('String', 0.1)).to.equal(undefined);
    });
    it('check value with index bigger than string length', () => {
        expect(lookupChar('String', 10)).to.equal('Incorrect index');
    });
    it('check value with negative index', () => {
        expect(lookupChar('String', -10)).to.equal('Incorrect index');
    });
    it('check value with valid params', () => {
        expect(lookupChar('String', 1)).to.equal('t');
    });
})