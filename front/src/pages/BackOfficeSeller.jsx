import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _ItemEdit } from '../cmps/ItemEdit'
import { loadItems } from '../store/actions/itemActions'
import { ItemPreview, itemPreview } from '../cmps/ItemPreview'
// import { ItemAdd } from '../cmps/ItemAdd'
import { ItemEdit } from '../cmps/ItemEdit'

// import { SellerDeatails } from '../cmps/SellerDeatails'

export class _BackOfficeSeller extends Component {
    state = {
        itemsToShow: null,
        isAdd: false
    }


    componentDidMount() {
        this.loadUserItems()
    }



    loadUserItems = async () => {

        const { items, loggedInUser } = this.props
        if (items.length === 0) {
            await this.props.loadItems()
            this.loadUserItems()
        }
        const itemsToShow = items.filter(({ seller }) => seller._id === loggedInUser._id)
        this.setState({ itemsToShow })
    }
    render() {

        const { loggedInUser } = this.props
        const { itemsToShow, isAdd } = this.state
        if (!loggedInUser || !itemsToShow) return <h1>Loading..</h1>
        if (itemsToShow.length === 0) return <h1>There is no items for you .. add some :)</h1>
        return (
            <>
                <h2 className="hello-seller">👋Helllo {loggedInUser.fullname}</h2>
                <div className="back-office-seller">
                    <ItemEdit className="add-Item-back" user={this.props.loggedInUser} loadUserItems={this.loadUserItems} />
                    <div className="item-container">
                        {itemsToShow && itemsToShow.map(item =>
                            <div key={item._id} className="item">
                                <ItemPreview item={item} removeable={true} /></div>
                        )}
                    </div>
                </div>
            </>
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

export const BackOfficeSeller = connect(mapStateToProps, mapDispatchToProps)(_BackOfficeSeller);
