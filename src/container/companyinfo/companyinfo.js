import React from 'react'
import { NavBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar/avatar'
export default class CompanyInfo extends React.Component{

    onChange(key, val) {
        this.setState({
            [key]: val,
        })
    }
    
    render() {
        return (
        <div>
            <NavBar
            mode="dark"
            leftContent="Back"
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >NavBar</NavBar>
            <AvatarSelector selectAvatar={(imageName) => this.setState({img: imageName})}/>
            <InputItem onChange={(v) => this.onChange('title', v)} >招聘职位</InputItem>
            <InputItem onChange={(v) => this.onChange('companyName', v)} >公司名称</InputItem>
            <InputItem onChange={(v) => this.onChange('salary', v)} >期望薪资</InputItem>
            <TextareaItem
                title="职位简介"
                placeholder="请输入..."
                rows={3}
                clear />
            <InputItem onChange={(v) => this.onChange('desc', v)} ></InputItem>

            <Button type='primary'>保存</Button>
            </div>
        )
    }
}
