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
import FirstRedux from './FirstRedux';
import { counter, add, remove, addAsync } from './index.redux';
import { Provider }from 'react-redux'

const reduxDevtolls = window.devToolsExtension ? window.devToolsExtension() : f => f

// // 1. 新建store
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtolls))// applyMiddleware(thunk))
 
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
            <FirstRedux />
            </Provider>),
        document.getElementById('root'))
// render()
// store.subscribe(render)