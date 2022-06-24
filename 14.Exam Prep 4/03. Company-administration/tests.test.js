let expect = require('chai').expect;

const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}


describe("companyAdministration", () => {

    describe("hiringEmployee", () => {
        it('test 1', () => {

            expect(() => companyAdministration.hiringEmployee('Alex', 'Engineer', 1)).to.throw(`We are not looking for workers for this position.`)
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 3)).to.equal("Alex was successfully hired for the position Programmer.")
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 5)).to.equal("Alex was successfully hired for the position Programmer.")
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 2)).to.equal("Alex is not approved for this position.");            
        });
        
    });
    describe("calculateSalary", () => {
        it('test 2', () => {

            expect(companyAdministration.calculateSalary(2)).to.equal(30);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);

            expect(() => companyAdministration.calculateSalary(-1)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary("")).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);

        })
    });

    describe("firedEmployee", () => {
        it('test 3', () => {
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, {})).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan"], {})).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan"], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan"], 3)).to.throw('Invalid input');
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 1)).to.equal("Peter, George");

        })
    });

}) // main describe closing bracket
