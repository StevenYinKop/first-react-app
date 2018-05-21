import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'

@connect(
    state => state.user,
    { login }
)
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this)
        this.state = {
            user: '',
            password: '',
        }
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
                        <InputItem onChange={v => this.setState({ user: v })}>用户名</InputItem>
                        <InputItem type="password" onChange={v => this.setState({ password: v })}>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={() => this.props.login({ user: this.state.user, password: this.state.password })} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>)
    }
}