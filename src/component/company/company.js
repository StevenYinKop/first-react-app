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
            </div>
        )
    }

}