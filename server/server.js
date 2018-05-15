const express = require('express')
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017')
// 连接成功后控制台输出一句话
mongoose.connection.on('connected', function () {
  console.log('mongo connect success!!')
})
// 创建document, 相当于mysql中的表
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, required: true },
  age: { type: Number, required: true }
}))

// User.create({
//   user: 'yinzifan',
//   age: 18
// }, function (err, doc) {
//   if (err)
//     throw err
//   console.log('create success', doc)
// })
User.update({'user': 'yinzifan'}, {'$set': {age: 18}}, function (err, doc) {
  if (err)
    throw err
  console.log('update success', doc)
})

const app = express()

app.get("/", function (req, resp) {
  resp.send('hello!')
})
app.get('/data', function (req, resp) {
  User.find({}, function (err, doc) {
    if (err)
      throw err
    console.log('find success', doc)
  })
  resp.json({ name: 'yinzifan', age: 23 })
})
app.listen(9000, function () {
  console.log('Node start at port 9000')
})