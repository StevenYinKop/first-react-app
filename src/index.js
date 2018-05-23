import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// 引入中间件 处理异步请求
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import CompanyInfo from './container/companyinfo/companyinfo'
import EmpInfo from './container/empinfo/empinfo'
import AuthRoute from './component/authroute/authroute'
import { Provider } from 'react-redux'
import combineReducers from './reducer'
import './config'
import './index.css'
import DashBorad from './component/dashborad/dashborad';

const reduxDevtolls = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(combineReducers, compose(applyMiddleware(thunk), reduxDevtolls))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute />
                <Switch >
                    <Route path='/bossinfo' component={CompanyInfo} />
                    <Route path='/empinfo' component={EmpInfo} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    {/*  如果不写path属性, 则在上述没有命中就会最终走到这个Route中
                <Route component={DashBorad} /> */}
                    <Route component={DashBorad} />
                </Switch>

            </div>
        </ BrowserRouter>
    </Provider>,
    document.getElementById('root'))