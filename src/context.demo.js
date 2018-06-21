import React from "react";
import PropTypes from "prop-types";

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <p>Sidebar</p>
                <Navbar></Navbar>
            </div>
        )
    }
}

class Navbar extends React.Component {
    static contextTypes = {
        user: PropTypes.string
    }
    render() {
        console.log(this.context)
        return (
            <div>
                <p>Navbar</p>
            </div>
        )
    }
}

class Page extends React.Component {
    static childContextTypes = {
        user: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = { user: 'CinCommon' }
    }
    getChildContext() {
        return this.state
    }

    render() {
        return (
            <div>
                <p>{this.state.user}</p>
                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default Page