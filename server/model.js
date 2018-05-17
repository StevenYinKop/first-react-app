
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017')
// 连接成功后控制台输出一句话
mongoose.connection.on('connected', function () {
  console.log('mongo connect success!!')
})