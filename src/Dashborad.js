import React from 'react'
import FirstRedux from './FirstRedux';
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

const SecondRedux = () => <h2>{'SecondRedux'}</h2>

const ThirdRedux = () => <h2>{'ThirdRedux'}</h2>

class ErrPage extends React.Component {

    render() {
        console.log('ErrPage', this.props)
        return (<h1>{`404! NOT FOUND PATH: ${this.props.match.params.location}`}</h1>)
    }
}
@connect(
    state => state.auth,
    { logout }
)
export default class Dashborad extends React.Component {
    render() {
        const url = this.props.match.url
        console.log('Dashborad', this.props)
        const redirectToLogin = <Redirect to='/login' />
        const app =
            (
                <div>
                    <button onClick={this.props.logout}>注销!</button>
                    <div>
                        <ul>
                            <li>
                                <Link to={`${url}`}>{'FirstRedux'}</Link>
                            </li>
                            <li>
                                <Link to={`${url}/second`}>{'SecondRedux'}</Link>
                            </li>
                            <li>
                                <Link to={`${url}/third`}>{'ThirdRedux'}</Link>
                            </li>
                        </ul>
                    </div>
                    <h1>主页!!</h1>
                    <Route path={`${url}/`} exact component={FirstRedux} />
                    <Route path={`${url}/second`} component={SecondRedux} />
                    <Route path={`${url}/third`} component={ThirdRedux} />
                    <Route path={`${url}/:location`} component={ErrPage} />
                </div>
            )
        return this.props.isAuth ? app : redirectToLogin;
    }
}