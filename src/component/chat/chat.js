import React from 'react'
import { List, InputItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { getMsgList } from '../../redux/chat.redux'

@connect(state=>state,
    { getMsgList }
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
        const socket = io('ws://localhost:9093')
        this.setState({ socket })
        this.props.getMsgList()
        socket.on('recvmsg', (data) => {
            console.log('recvmsg', data)
            this.setState({ msg: [...this.state.msg, data.text] })
        })
        console.log(socket)
    }

    handleSubmit() {
        this.state.socket.emit('sendmsg', { text: this.state.text })
        this.setState({ text: '' })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.msg && this.state.msg.map(item => <div key={item}>{item}</div>)}
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