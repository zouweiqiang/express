const express = require('express')

const app = express()

const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件');
  next()
}

app.get('/', mw1, (req, res) => {
  res.send('User page')
})
app.get('/user', mw1, (req, res) => {
  res.send('User page')
})

app.listen(80, () => {
  console.log('express running at 127.0.0.1');

})