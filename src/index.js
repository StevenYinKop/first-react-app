import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// 引入中间件 处理异步请求
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import { Provider } from 'react-redux'
import combineReducers from './reducer'
import './config'

const reduxDevtolls = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(combineReducers, compose(applyMiddleware(thunk), reduxDevtolls))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Switch > */}
            <div>
                <AuthRoute />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </div>
            {/* </Switch> */}
        </ BrowserRouter>
    </Provider>,
    document.getElementById('root'))