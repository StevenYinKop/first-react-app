import React from 'react'
import { NavBar } from 'antd-mobile'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavLink from '../navlink/navlink';
import Company from "../company/company";
import Emp from "../emp/emp";
import Me from '../me/me';
import { getMsgList, recvMsg } from '../../redux/chat.redux'

const Msg = (props) => {
    return (<h1>Msg</h1>)
}
class DashBorad extends React.Component { // = ({ user, location, getMsgList, recvMsg }) => {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getMsgList()
        this.props.recvMsg()
    }

    render() {
        const { location, user } = this.props
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

        const getTitle = () => {
            return navList.find(v => location.pathname === v.path)
        }
        return (
            <div>
                <NavBar className="fix-header">{getTitle() ? getTitle().title : <Redirect to='/login' />}</NavBar>
                <div style={{ marginTop: 45 }}>
                    <Switch >
                        {navList.map(item =>
                            <Route key={item.path} path={item.path} component={item.component} />
                        )}
                    </Switch>
                </div>
                <div style={{ position: 'fixed', height: '45px', width: '100%', bottom: 0 }}>
                    <NavLink navList={navList} />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => state, { getMsgList, recvMsg })(DashBorad)) // (mapStatetoProps, actionCreators)(FirstRedux)