const express = require('express')
const app = new express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/', (req, res) => {
  res.send('post rea\request')
})
app.listen(80, () => {
  console.log('Express running at 127.0.0.1');
})