const isPrime = (num) => {
    const upper = Math.floor(Math.sqrt(num));
    for (let i = upper; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {isPrime};