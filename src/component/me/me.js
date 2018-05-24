import React from 'react'
import { connect } from "react-redux";
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
import { Redirect } from "react-router-dom";
import browserCookies from "browser-cookies";
import { logout } from '../../redux/user.redux'

@connect(
    state => state.user,
    { logout }

)
export default class Me extends React.Component {

    render() {
        const { user, avatar, type, company, title, desc, money, redirectTo } = this.props
        console.log(this.props)
        return (
            user ?
                <div>
                    <Result
                        img={<img src={require(`../img/${avatar}.png`)} alt="avatar" />}
                        title={user}
                        message={type === '2' ? company : null}
                    />
                    <List renderHeader={() => '简介'}>
                        <List.Item
                            multipleLine
                        >{title}
                            {desc && desc.split('\n').map(v => <List.Item.Brief key={v}>{v}</List.Item.Brief>)}
                            {money && `期望薪资: ${<List.Item.Brief >{money}</List.Item.Brief>}`}
                        </List.Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <List.Item onClick={() => {
                            Modal.alert('退出登录', '确认退出?', [
                                { text: '取消', onPress: () => console.log('cancel') },
                                { text: '确认', onPress: () => {
                                    browserCookies.erase('userid')
                                    this.props.logout()
                                } },
                            ])
                        }}>
                            {'退出登录'}
                        </List.Item>
                    </List>
                </div>
                : <Redirect to={redirectTo} />
        )
    }

}