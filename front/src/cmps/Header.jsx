import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class _Header extends Component {
    render() {
        const {loggedInUser} = this.props;
        return <header className="header-container">
            <div className="logo"><NavLink exact to="/">🧦Happy Faces</NavLink></div>
            <nav>
                <NavLink to="/shop">🧦Find</NavLink>
                <NavLink exact to="/">Sell</NavLink>
                <NavLink to="/login"><AccountCircleIcon/>Login</NavLink>
            </nav>
            {loggedInUser && <span className="loggedin-user">

                <Link to={`user/${loggedInUser._id}`}>
                    {loggedInUser.fullname}
                </Link>
                
                <span>{loggedInUser.score || 0}</span>
            </span>}
        </header>
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)