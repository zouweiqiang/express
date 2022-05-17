const express = require('express')

const app = express()

const router = require('./router')

app.use(router)

app.listen(80, () => {
  console.log('express running at 127.0.0.1');

})