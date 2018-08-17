
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/chat')
// 连接成功后控制台输出一句话
mongoose.connection.on('connected', function () {
  console.log('mongo connect success!!')
})

const models = {
  user: {
    'user': { type: String, require: true },
    'password': { type: String, require: true },
    'type': { type: String, require: true },
    'avatar': { type: String },
    'desc': { type: String },
    'title': { type: String },
    'company': { type: String },
    'salary': { type: String },
  },
  chat: {
    'chatid': { type: String, require: true },
    'from': { type: String, require: true },
    'to': { type: String, require: true },
    'read': { type: Boolean, default: false },
    'content': { type: String, require: true },
    'create_time': { type: Number, default: new Date().getTime() },
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}
