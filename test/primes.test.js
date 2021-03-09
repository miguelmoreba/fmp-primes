const { isPrime, generatePrimeArray, getMatrix } = require('../index');
const expect = require("chai").expect;

describe("isPrime()", function () {
    it('returns true when first 15 prime numbers are passed', function () {
        expect(isPrime(2)).to.be.true;
        expect(isPrime(3)).to.be.true;
        expect(isPrime(5)).to.be.true;
        expect(isPrime(7)).to.be.true;
        expect(isPrime(11)).to.be.true;
        expect(isPrime(13)).to.be.true;
        expect(isPrime(17)).to.be.true;
        expect(isPrime(19)).to.be.true;
        expect(isPrime(23)).to.be.true;
        expect(isPrime(29)).to.be.true;
        expect(isPrime(31)).to.be.true;
        expect(isPrime(37)).to.be.true;
        expect(isPrime(41)).to.be.true;
        expect(isPrime(43)).to.be.true;
        expect(isPrime(47)).to.be.true;
    });

    it('returns false when first non prime numbers are passed', function () {
        expect(isPrime(4)).to.be.false;
        expect(isPrime(6)).to.be.false;
        expect(isPrime(8)).to.be.false;
        expect(isPrime(9)).to.be.false;
        expect(isPrime(10)).to.be.false;
        expect(isPrime(12)).to.be.false;
        expect(isPrime(14)).to.be.false;
        expect(isPrime(15)).to.be.false;
        expect(isPrime(16)).to.be.false;
        expect(isPrime(18)).to.be.false;
        expect(isPrime(20)).to.be.false;
        expect(isPrime(21)).to.be.false;
        expect(isPrime(22)).to.be.false;
        expect(isPrime(24)).to.be.false;
        expect(isPrime(25)).to.be.false;
    });
});

describe("generatePrimeArray()", function () {
    it("returns correct 3 first primes", function () {
        expect(generatePrimeArray(3)).to.deep.equal([2, 3, 5]);
    });
});

describe("getMatrix()", function () {
    it("returns formatted matrix string", function () {
        const expected = "|  | 2| 3| 5|\n| 2| 4| 6| 10|\n| 3| 6| 9| 15|\n| 5| 10| 15| 25|\n"
        expect(getMatrix(3)).to.equal(expected);
    });
});
