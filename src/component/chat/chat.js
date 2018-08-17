import React from 'react'
import { List, InputItem, Button, NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'

@connect(state => state,
    { getMsgList, sendMsg, recvMsg }
)
export default class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: [],
        }
    }

    componentDidMount() {
        // this.setState({ socket })
        // socket.on('recvmsg', (data) => {
        //     console.log('recvmsg', data)
        //     this.setState({ msg: [...this.state.msg, data.text] })
        // })
        // console.log(socket)
    }

    handleSubmit() {
        // this.state.socket.emit('sendmsg', { text: this.state.text })
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({ from, to, msg })
        this.setState({ text: '' })
    }

    render() {
        // console.log(this.props)
        const user = this.props.match.params.user
        return (
            <div id='chat-page'>
                <NavBar mode='dark'>{this.props.match.params.user}</NavBar>
                {this.props.chat.chatmsg && this.props.chat.chatmsg.map(item => item.from == user 
                    ? (<List key={item._id}><List.Item className="chat-me">{item.content}</List.Item></List>)
                    : (<List key={item._id}><List.Item>{item.content}</List.Item></List>) )}
                <div className='stick-footer'>
                    <List>
                        <InputItem
                            placeholder='请输入...'
                            value={this.state.text}
                            onChange={v => this.setState({ text: v })}
                            extra={<span onClick={() => this.handleSubmit()}>发送</span>} />
                    </List>
                </div>
            </div>
        )
    }
}