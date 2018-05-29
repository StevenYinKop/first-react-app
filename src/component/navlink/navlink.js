import React from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const NavLink = ({ navList, location, history, unread }) => {

    navList = navList.filter(v => !v.hide)

    return (
        <TabBar>
            {navList && navList.map(item =>
                <TabBar.Item
                    badge={item.path === '/msg' ? unread : null}
                    icon={{ uri: require(`./img/${item.icon}.png`) }}
                    selectedIcon={{ uri: require(`./img/${item.icon}-active.png`) }}
                    selected={location.pathname === item.path}
                    title={item.title}
                    onPress={() => history.push(item.path)}
                    key={item.path} />)}
        </TabBar>
    )
}

NavLink.propTypes = {
    navList: PropTypes.array.isRequired
}
// export default NavLink
export default withRouter(connect(state=>state.chat)(NavLink))