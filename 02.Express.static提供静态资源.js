const express = require('express')

const app = express()

app.use(express.static('./CodeChomper/13K_Back'))


app.listen(80, () => {
  console.log('express running at 127.0.0.1');

})