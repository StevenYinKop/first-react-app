import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import './register.css'

@connect(
    state => state.user,
    { register }
)
export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
            confirm: '',
            type: 1
        }
    }

    render() {
        console.log(this.props)
        return (<div>
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
            <Logo />
            <List>
                <WhiteSpace />
                {this.props.msg && <p className='error-msg'>{this.props.msg}</p>}
                <InputItem onChange={v => this.setState({ user: v })}>用户名</InputItem>
                <InputItem type="password" onChange={v => this.setState({ password: v })}>密码</InputItem>
                <InputItem type="password" onChange={v => this.setState({ confirm: v })}>确认密码</InputItem>
            </List>
            <List>
                <Radio.RadioItem checked={this.state.type === 1} onChange={() => this.setState({ type: 1 })}>应聘者</Radio.RadioItem>
                <Radio.RadioItem checked={this.state.type === 2} onChange={() => this.setState({ type: 2 })} >公司</Radio.RadioItem>
            </List>
            <WhiteSpace />
            <Button onClick={() => this.props.register(this.state)}>注册</Button>
        </div>)
    }
}