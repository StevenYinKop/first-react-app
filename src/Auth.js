import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

// 两个reducer 每个reducer都有一个state
// 需要合并reducer 可使用 combineReducer
@connect(state=> state.auth,
    { login }
)
export default class Auth extends React.Component {
    render() {
        console.log('Auth', this.props)
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/home' /> : null}
                <h1>登录页面!</h1>
                <button onClick={this.props.login}>登录!</button>
            </div>
        )
    }
}