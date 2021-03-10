# Prime numbers matrix generator

## Instructions to run

From root of folder:

```npm i```

```npm run start```

From a browser window (or anything you use to hit http endpoints), hit `localhost:3000/primes/{your-number-here}`

[This is an example with number 5](localhost:3000/primes/5)

It will print a matrix of as many prime numbers as you want and a matrix of multiples, like this:

|  | 2| 3| 5| <br>
| 2| 4| 6| 10| <br>
| 3| 6| 9| 15| <br>
| 5| 10| 15| 25| <br>

You can expect a reasonable performance up to 1000, then you'll have to wait a bit longer.

## Tests

There's a functionality suite and a performance suit. You can run them lke so:

- Functionality: `npm run test:func`
- Performance: `npm run test:perf`
- Both: `npm test`


