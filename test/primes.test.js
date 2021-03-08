const {isPrime, getMatrix} = require('../index');

test('isPrime() returns true when first 15 prime numbers are passed', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(29)).toBe(true);
    expect(isPrime(31)).toBe(true);
    expect(isPrime(37)).toBe(true);
    expect(isPrime(41)).toBe(true);
    expect(isPrime(43)).toBe(true);
    expect(isPrime(47)).toBe(true);
});

test('isPrime() returns false when first 15 non prime numbers are passed', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(14)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(16)).toBe(false);
    expect(isPrime(18)).toBe(false);
    expect(isPrime(20)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(22)).toBe(false);
    expect(isPrime(24)).toBe(false);
    expect(isPrime(25)).toBe(false);
});

test('getMatrix() returns correct result for 3 numbers', () => {
    const expected = "|  | 2| 3| 5|\n| 2| 4| 6| 10|\n| 3| 6| 9| 15|\n| 5| 10| 15| 25|"

    expect(getMatrix(3)).toMatch(expected);
});
