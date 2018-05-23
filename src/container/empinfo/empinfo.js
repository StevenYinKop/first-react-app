import React from 'react'
import { NavBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar/avatar'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'

@connect(
    state => state.user,
    { update }
)
export default class EmpInfo extends React.Component {

    onChange(key, val) {
        this.setState({
            [key]: val,
        })
    }

    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {this.props.redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo} /> : null}
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >应聘者完善资料</NavBar>
                <AvatarSelector selectAvatar={(imageName) => this.setState({ avatar: imageName })} />
                <InputItem onChange={(v) => this.onChange('title', v)} >期望职位</InputItem>
                <TextareaItem
                    title="个人简介"
                    placeholder="请输入..."
                    rows={3}
                    onChange={(v) => this.onChange('desc', v)}
                    clear />
                <Button onClick={() => this.props.update(this.state)} type='primary'>保存</Button>
            </div>
        )
    }
}
