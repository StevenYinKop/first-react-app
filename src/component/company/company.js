import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from "../../redux/chatuser.redux";
import UserCard from "../usercard/usercard";

@connect(
    state => state.chatuser,
    { getUserList }
)
export default class Company extends React.Component {

    componentDidMount() {
        this.props.getUserList('1')
    }

    render() {
        return (
            <div>
                <UserCard userlist={this.props.userlist} />
                {/* <WingBlank>
                    {this.props.userlist && this.props.userlist.map(item =>
                        item.avatar && (
                            <div>
                                <WhiteSpace />
                                <Card key={item._id}>
                                    <Card.Header
                                        title={item.user}
                                        thumb={require(`../img/${item.avatar}.png`)}
                                        extra={<span>{item.title}</span>}
                                    >
                                    </Card.Header>
                                    <Card.Body>
                                        <div>{item.desc}</div>
                                    </Card.Body>
                                </Card>
                            </div>)
                    )}
                </WingBlank> */}
            </div>
        )
    }

}