import React from 'react'
import { connect } from "react-redux";
import { Result, List, WhiteSpace } from 'antd-mobile';
import browserCookies from "browser-cookies";

@connect(
    state => state.user
)
export default class Me extends React.Component {

    render() {

        const { user, avatar, type, company, title, desc, money } = this.props
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
                        <List.Item onClick={()=>{
                            console.log('logout')
                            browserCookies.erase('userid')
                        }}>
                            {'退出登录'}
                        </List.Item>
                    </List>
                </div>
                : null
        )
    }

}