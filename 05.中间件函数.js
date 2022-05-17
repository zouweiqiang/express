const express = require('express')

const app = express()

const mw = function (req, res, next) {
  console.log('简单的中间件');
  const time = Date.now()
  req.startTime = time
  next()
}

app.use(mw)

app.get('/', (req, res) => {
  res.send('Home page', + req.startTime)
})
app.get('/user', (req, res) => {
  res.send('user page')
})
app.listen(80, () => {
  console.log('express running at 127.0.0.1');

})