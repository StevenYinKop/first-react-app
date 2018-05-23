import React from 'react'
import { NavBar } from 'antd-mobile'
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavLink from '../navlink/navlink';
import Company from "../company/company";
import Emp from "../emp/emp";
import Me from '../me/me';

const Msg = (props) => {
    return (<h1>Msg</h1>)
}
const DashBorad = ({ user, location }) => {

    const navList = [{
        path: '/company',
        text: '应聘者',
        icon: 'company',
        title: '列表',
        component: Company,
        hide: user.type === '1'
    }, {
        path: '/emp',
        text: '公司',
        icon: 'job',
        title: '列表',
        component: Emp,
        hide: user.type === '2'
    }, {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg,
    }, {
        path: '/me',
        text: '关于我',
        icon: 'user',
        title: '个人中心',
        component: Me,
    }]
    console.log('DashBorad location', location)
    console.log('DashBorad me', user)
    return (
        <div>
            <NavBar className="fix-header">{navList.find(v => location.pathname === v.path).title }</NavBar>
            <Switch >
                {navList.map(item =>
                    <Route key={item.path} path={item.path} component={item.component} />
                )}
                {/* <Route path="/company" component={Company} />
                <Route path="/emp" component={Emp} />
                <Route path="/msg" component={Msg} />
                <Route path="/me" component={Me} /> */}
            </Switch>
            <NavLink navList={navList}/>
        </div>
    )
}

export default withRouter(connect(state => state)(DashBorad)) // (mapStatetoProps, actionCreators)(FirstRedux)