const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
  const query = req.query

  res.send({
    status: 0,
    msg: 'Get请求成功',
    data: query
  })
})

router.post('/post', (req, res) => {
  const body = req.body

  res.send({
    status: 0,
    msg: 'Post请求成功',
    data: body
  })
})
module.exports = router