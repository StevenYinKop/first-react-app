import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import baseform from "../../component/baseform/baseform";

@connect(
    state => state.user,
    { login }
)
@baseform
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this)
        // this.state = {
        //     user: '',
        //     password: '',
        // }
    }

    register() {
        console.log('register', this.props)
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg && <p className='error-msg'>{this.props.msg}</p>}
                        <InputItem onChange={v => this.props.handleChange('user', v)}>用户名</InputItem>
                        <InputItem type="password" onChange={v => this.props.handleChange('password', v)} >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={() => this.props.login({ user: this.props.state.user, password: this.props.state.password })} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>)
    }
}