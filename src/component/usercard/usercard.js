import React from 'react'
import { Card, WhiteSpace, WingBlank } from "antd-mobile";
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const UserCard = ({ userlist, history }) => {
    const handleClick = v => history.push(`chat/${v}`)

    return (<WingBlank>
        {userlist && userlist.map(item =>
            item.avatar && (
                <div key={item._id}>
                    <WhiteSpace />
                    <Card 
                    key={item._id} 
                    onClick={()=>handleClick(item.user)}>
                        <Card.Header
                            title={item.user}
                            thumb={require(`../img/${item.avatar}.png`)}
                            extra={<span>{item.title}</span>}
                        >
                        </Card.Header>
                        <Card.Body>
                            <div>{item.desc}</div>
                            {item.type === '2' ? <div>{`期望薪资: ${item.salary}`}</div> : null}
                        </Card.Body>
                        {item.type === '2' ? <Card.Footer content={`${item.company}`} /> : null}
                    </Card>
                </div>)
        )}
    </WingBlank>)
}
UserCard.propTypes = {
    userlist: PropTypes.array.isRequired
}

export default withRouter(UserCard)