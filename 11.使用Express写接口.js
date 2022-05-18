const express = require('express')

const app = express()

const router = require('./12.api-router')

const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/api', router)

// app.post('/user', (req, res) => {
//   console.log(req.body);
//   res.send('ok')
// })

app.listen(80, () => {
  console.log("Exprss server running at http://127.0.0.1");
})