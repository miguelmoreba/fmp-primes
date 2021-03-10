const express = require('express')
const app = express()
const port = 3000
const { getMatrix } = require("./index");

app.get('/primes/:number', (req, res) => {
  console.log(req.params);
  const matrix = getMatrix(parseInt(req.params.number));
  res.send("<pre>" + matrix + "</pre>")
});

app.listen(port, () => {
  console.log(`Primes app listening at http://localhost:${port}`)
});