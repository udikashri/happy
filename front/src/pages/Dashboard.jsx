import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { _ItemEdit } from '../cmps/ItemEdit'
import { loadItems } from '../store/actions/itemActions'
import { ItemPreview } from '../cmps/ItemPreview'
// import { ItemAdd } from '../cmps/ItemAdd'
import { ItemEdit } from '../cmps/ItemEdit'
import { Order } from '../cmps/Order'

// import { SellerDeatails } from '../cmps/SellerDeatails'

export class _Dashboard extends Component {
    state = {
        itemsToShow: null,
        currItem: null
    }


    async componentDidMount() {


    }

  
    render() {

        return (
          <div className="dashboard">
              dash board
              orders:
              <Order/>
          </div>
        )
    }
}
const mapStateToProps = state => {
    return {

        loggedInUser: state.userModule.loggedInUser,
        items: state.itemModule.items
    }
}

const mapDispatchToProps = {
    loadItems

}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard);
