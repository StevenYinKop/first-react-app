// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// 引入中间件 处理异步请求
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Dashborad from './Dashborad'
import { Provider } from 'react-redux'
import reducers from './reducer'

const reduxDevtolls = window.devToolsExtension ? window.devToolsExtension() : f => f

// // 1. 新建store
// 使用合并的reducer
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtolls))// applyMiddleware(thunk))

// function listener() {
//     const current = store.getState()
//     console.log(current)
// }

// store.subscribe(listener)
// const init = store.getState()
// console.log(init)

// store.dispatch({type: 'add'})
// store.dispatch({type: 'add'})
// store.dispatch({type: 'add'})
// store.dispatch({type: 'add'})
// const render = () => 

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch >
                {/* 只渲染第一个匹配的路径, 不会往下走 */}
                <Route path='/login' exact component={Auth} />
                <Route path='/home' component={Dashborad} />
                <Redirect to='/home' />
            </Switch>
        </ BrowserRouter>
    </Provider>),
    document.getElementById('root'))
// render()
// store.subscribe(render)