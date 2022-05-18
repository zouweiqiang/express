const express = require('express')

const app = express()

const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件');
  next()
}

app.get('/', mw1, (req, res) => {
  throw new Error('服务器内部错误')
})

// app.get('/user', mw1, (req, res) => {
//   res.send('User page')
// })

app.use((err, req, res, next) => {
  console.log('内部发生了错误');
  res.send('Error', +err.message)
})


app.listen(80, () => {
  console.log('express running at 127.0.0.1');

})