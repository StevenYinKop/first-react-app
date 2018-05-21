import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'
@withRouter
@connect(
    null,
    { loadData }
)
export default class AuthRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state= {}
    }
    componentDidMount() {
        // 获取用户信息
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        console.log(pathname)
        if(publicList.indexOf(pathname)>-1) {
            return null
        }
        axios.get('/user/info')
            .then((res) => {
                if(res.status === 200) {
                    if(res.data.code === 0) {
                        this.props.loadData(res.data.data)
                    } else {
                        this.props.history.push('/login')
                        console.log('res.data.code != 0', this.props.history)
                    }
                    console.log(res.data)
                    this.setState({result: res.data})
                }
            })
        // 是否登录

        // 现在的url地址, login是不需要跳转的
        // 用户的type 身份是公司还是应聘者
        // 用户是否完善信息(头像/个人简介)
    }
    render () {
        return (<h1>{this.state.result && this.state.result.code}</h1>)
    }
}