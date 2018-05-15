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
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import FirstRedux from './FirstRedux';
import { counter, add, remove, addAsync } from './index.redux';
import { Provider } from 'react-redux'

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
const SecondRedux = () => <h2>{'SecondRedux'}</h2>

const ThirdRedux = () => <h2>{'ThirdRedux'}</h2>

class ErrPage extends React.Component {
    
    render() {
        console.log('ErrPage', this.props)
        return (<h1>{`404! NOT FOUND PATH: ${this.props.match.params.location}`}</h1>)
    }
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>{'FirstRedux'}</Link>
                    </li>
                    <li>
                        <Link to='/second'>{'SecondRedux'}</Link>
                    </li>
                    <li>
                        <Link to='/third'>{'ThirdRedux'}</Link>
                    </li>
                </ul>
                <Switch > 
                {/* 只渲染第一个匹配的路径, 不会往下走 */}
                    <Route path='/' exact component={FirstRedux} />
                    <Route path='/second' exact component={SecondRedux} />
                    <Route path='/third' exact component={ThirdRedux} />
                    <Route path='/:location' component={ErrPage} />
                </Switch>
            </div>
        </ BrowserRouter>
    </Provider>),
    document.getElementById('root'))
// render()
// store.subscribe(render)