import React, { Component } from 'react'
// import { ItemFilter } from '../cmps/ItemFilter';
import { connect } from 'react-redux'
import { ItemList } from '../cmps/ItemList';
// import { ItemFilter } from '../cmps/ItemFilter'
// import { Link } from 'react-router-dom'
// import { loadItems, removeItem, setFilter } from '../store/actions/itemActions'
// import { logout } from '../store/actions/userActions'
import {itemService} from '../services/itemService.js'



class _ShopApp extends Component {
    state = {
        items: []
    }

   async componentDidMount() {
    const items = await itemService.query();
    this.setState({items})
        // this.props.loadItems(this.props.filterBy)
        // console.log('Got from store:', this.props);
        // TODO load socks items and save in state . //////////
        // console.log(this.props.items);
        // this.props.loadItems()
// console.log(itemService.query())

        // query(){
        //     return Promise.resolve(gItems)
        // }
    }

    // onRemove = (itemId) => {
    //     this.props.removeItem(itemId)

    // }

    // onSetFilter = (filterBy) => {
    //     this.props.setFilter(filterBy)
    //     this.props.loadItems(filterBy)

    // }

    // doLogout = async () => {
    //     await this.props.logout()
    //     this.setState({ loggedInUser: null }, () => this.props.history.push('/'))
    // }

    render() {
        // const { items} = this.props
        // console.log('logged in user', loggedInUser);
        // const login = <p>Please Login</p>
       
        return (
            <section className="shop-container">
                <h1>shop app</h1>
                <ItemList items={this.state.items} />
                {/* <ItemFilter/> */}
                {/* {loggedInUser.username && <button className="logout-btn" onClick={this.doLogout}>Logout</button>}
                <ItemFilter onSetFilter={this.onSetFilter} />
                {loggedInUser.isAdmin && <button className="add-item-btn"><Link to={`/item/add`}>Add New Item</Link></button>}
                <ItemsList items={items} onRemove={this.onRemove} loggedInUser={loggedInUser} /> */}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {

        // items: state.itemModule.items,
        // filterBy: state.itemModule.filterBy,
        // loggedInUser: state.userModule.loggedInUser,
    }
}

const mapDispatchToProps = {
    // loadItems,
    // removeItem,
    // setFilter,
    // logout,
}



export const ShopApp = connect(mapStateToProps, mapDispatchToProps)(_ShopApp);

// //(!loggedInUser.username)? login :