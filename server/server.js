const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

app.use(cookieParser())
app.use(cors({credentials: true}))
app.use(bodyParser.json())
app.use('/user', userRouter)

// app.get("/", function (req, resp) {
//   resp.send('hello!')
// })
app.listen(9000, function () {
  console.log('Node start at port 9000')
})