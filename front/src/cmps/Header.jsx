import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props;
        return <header className="header-container">
            <nav  >
                <div className="leftnav">
                    <div className="logo"><NavLink exact to="/">HappySocks</NavLink></div>
                </div>
                <div className="rightnav">
                    <NavLink className="header-find" to="/shop">Explore</NavLink>
                    {!loggedInUser && <NavLink to="/login"><AccountCircleIcon />Login</NavLink>}
                    {loggedInUser && <span className="loggedin-user">

                        <Link to={`seller/${loggedInUser._id}`}>
                            <img className="item-img" src={loggedInUser.imgUrl} />
                        </Link>
                    </span>}
                </div>
            </nav>
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