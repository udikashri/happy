import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { itemService } from '../services/itemService.js'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'
// import {plus} from '../assets/icons/plus.png'
import { loadItems } from '../store/actions/itemActions'

class _CheckOut extends Component {
    state = {
        currItem: { title: '', imgUrl: '', price: 0, _id: '' },

    }
    async componentDidMount() {
        await this.props.loadItems()
        this.loadItem()
    }

    loadItem = () => {
        const itemId = this.props.match.params.id
        const selectItem = this.props.items.filter(item => {
            return itemId === item._id
        })

        this.setState({ currItem: selectItem[0] }, () => {
        }, () => {
        })
    }

    render() {
        const { currItem } = this.state
        return (<div>
            <h1>checkOut Me</h1>
            Contact information
            <div className="mail">
                <label  className="field-label" for="checkout_email">Email</label>
                <input placeholder="Email" autoCapitalize="none" spellCheck="false" autoComplete="shipping email" aria-describedby="checkout-context-step-one" aria-required="true" type="email" name="email"></input>
                <div className="ship-infomrtion"></div>
            </div>
            <div className="Shipping-address">
            <label className="field-label" for="checkout_email">First Name</label>
                <input placeholder="First Name</" autoCapitalize="none" spellCheck="false"  aria-describedby="checkout-context-step-one" aria-required="true" type="text" name="firstName"></input>
                <div className="ship-infomrtion"></div>

            </div>

        </div>)
    }
}

const mapStateToProps = state => {
    return {

        items: state.itemModule.items,
        // filterBy: state.itemModule.filterBy,
        // loggedInUser: state.userModule.loggedInUser,
    }
}


const mapDispatchToProps = {
    loadItems,

}

export const CheckOut = connect(mapStateToProps, mapDispatchToProps)(_CheckOut);