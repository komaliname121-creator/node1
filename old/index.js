const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>2.0.0 Live - Node.js Application <br> Using Nexus</h1>')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
