import React from 'react'
import { NavBar } from 'antd-mobile'
import { Route } from 'react-router-dom'
import NavLink from '../../component/navlink/navlink'
import { connect } from 'react-redux'

const Company = (props) => {
    return (<h1>Company</h1>)
}
const Emp = (props) => {
    return (<h1>Emp</h1>)
}
const Msg = (props) => {
    return (<h1>Msg</h1>)
}
const Me = (props) => {
    return (<h1>Me</h1>)
}

const user = this.props.user

const navList = [{
    path: '/company',
    text: '应聘者',
    icon: '/company',
    title: '列表',
    component: Company,
    hide: 
}]
const DashBorad = (props) => {
    return (
        <div>
            <NavBar
                mode="dark"
            >NavBar</NavBar>
            <Route path="/company" component={Company} />
            <Route path="/emp" component={Emp} />
            <Route path="/msg" component={Msg} />
            <Route path="/me" component={Me} />
            <NavLink />
        </div>
    )
}

export default connect({ state })(DashBorad) // (mapStatetoProps, actionCreators)(FirstRedux)