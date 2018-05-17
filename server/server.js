const express = require('express')
const userRouter = require('./user')
const app = express()


app.use('/user', userRouter)

// app.get("/", function (req, resp) {
//   resp.send('hello!')
// })
app.listen(9000, function () {
  console.log('Node start at port 9000')
})