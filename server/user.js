const model = require('./model')
const User = model.getModel('user')
const express = require('express')
const utils = require('utility')
const Router = express.Router()
const _filter = { 'password': 0, '_v': 0}

Router.get('/info', function (req, resp) {
    const { userid } = req.cookies
    if(!userid) {
        return resp.json({ code: 1})
    }
    User.findOne( { _id: userid }, _filter, function (err, doc){
        if(err) return resp.json({ code: 1, msg: '' })
        if(doc) return resp.json({ code: 0, data: doc })
    })
})
Router.get('/list', function (req, resp) {
    User.find({}, function (err, doc) {
        if (err) throw err
        return resp.json(doc)
    })
})

Router.post('/login', function (req, resp){
    console.log(req.body)
    const { user, password } = req.body
    User.findOne({ user, password: md5Password(password) }, _filter, function (err, doc) {
        if(err) throw err
        if(doc) {
            resp.cookie('userid', doc._id)
            return resp.json({ code: 0, data: doc})
        } else {
            return resp.json({ msg: '账号信息有误请确认!', code: 1})
        }
    })
}) 

Router.post('/register', function (req, resp) {
    console.log(req.body)
    const { user, password, type } = req.body
    User.findOne({ user }, function (err, doc) {
        if (doc) {
            return resp.json({ code: 1, msg: '用户名重复' })
        }
        const userModel = new User({ user, password: md5Password(password), type })
        userModel.save(function (err, doc){
            if(err) {
                return resp.json({ code: 1, msg: '服务器正忙!' })
            }
            const { user, type, _id } = doc
            resp.cookie('userid', _id)
            return resp.json({ code:0, data: { user, type, _id }})
        })
    })
})

function md5Password(password) {
    const salt = 'charRoom_Liverpool!315'
    return utils.md5(utils.md5(`${password}${salt}`))
}

module.exports = Router