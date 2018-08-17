const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')
// const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket){
  socket.on('sendmsg', function(data) {
    const { from, to, msg } = data
    const chatid = [from, to].sort().join('_')
    Chat.create({ chatid, from, to, content: msg}, function(err, doc) {
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
    // console.log(data)
    // io.emit('recvmsg', data)
  })
})

// app.use(cors({credentials: true}))
app.use(cookieParser())
app.use(bodyParser.json())

// app.use("/", function (req, resp, next) {
//   console.log(req.headers)
//   var origin = req.header('origin')
//   console.log(origin)
//   if(origin) 
//   resp.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   resp.header('Access-Control-Allow-Methods', '*')
//   resp.header('Access-Control-Allow-Headers', 'Content-Type')
//   resp.header('Access-Control-Max-Age', '3600')
//   resp.header('Access-Control-Allow-Credentials', 'true')
//   next()
// })
app.use('/user', userRouter)
server.listen(9093, function () {
  console.log('Node start at port 9093')
})