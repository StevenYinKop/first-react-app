// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { createStore } from 'redux'
// 通过reducer建立
// 根据老的state和action 生成新的state
function counter(state = 0, action) {
    switch (action.type) {
        case 'add':
        return state + 1;
        case 'remove':
        return state - 1;
        default:
        return 10;
    }
}

// 1. 新建store
const store = createStore(counter)
function listener() {
    const current = store.getState()
    console.log(current)
}

store.subscribe(listener)
const init = store.getState()
console.log(init)

store.dispatch({type: 'add'})
store.dispatch({type: 'add'})
store.dispatch({type: 'add'})
store.dispatch({type: 'add'})
