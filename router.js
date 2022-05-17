// 1.导入 express
var express = require('express')

//2．创建路由对象
var router = express.Router()

//3．挂载具体的路由
router.get('user/list', (req, res) => {
  res.send('Gst user list')
})
router.post('user/add', (req, res) => {
  res.send('add new user')
})

//4．向外导出路由对象module.exports =g
module.exports = router
