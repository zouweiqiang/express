const express = require('express')

const app = express()

const parser = require('body-parser')

app.use((req, res, next) => {

  let str = ""
  req.on('data', (chank) => {
    str += chank
  })

  req.on('end', () => {
    console.log(str);
  })
})
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log("Exprss server running at http://127.0.0.1");
})