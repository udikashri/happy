import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { _ItemEdit } from '../cmps/ItemEdit'
import { loadItems } from '../store/actions/itemActions'
import { ItemPreview } from '../cmps/ItemPreview'
// import { ItemAdd } from '../cmps/ItemAdd'
import { ItemEdit } from '../cmps/ItemEdit'
import { Order } from '../cmps/Order'

// import { SellerDeatails } from '../cmps/SellerDeatails'

export class _BackOfficeSeller extends Component {
    state = {
        itemsToShow: null,
        currItem: null
    }


    async componentDidMount() {
        await this.props.loadItems()
        await this.loadUserItems()

    }

    async componentDidUpdate(prevState) {
        if (prevState.itemsToShow !== this.state.itemsToShow) {
            const { itemsToShow } = this.state
            console.log(await itemsToShow);
        }
        if (prevState.currItem !== this.state.currItem) {
            const { currItem } = this.state
            console.log(await currItem);
        }
        //   this.setState({ itemsToShow })
        // const { currItem } = this.props
        // // console.log(await currItem);
        // this.setState({ currItem })
    }

    onEdit = async (ev, itemId) => {
        ev.stopPropagation()
        // await 
        const currItem = this.props.items.find(item => {
            return item._id === itemId
        })

        await this.setState({ currItem })
        console.log(currItem);
        console.log(this.state);
        // this.props.history.push('/shop')
    }

    loadUserItems = async () => {
        const { items, loggedInUser } = this.props
        if (items.length === 0) {
            await this.props.loadItems()
            this.loadUserItems()
        }
        const itemsToShow = items.filter(({ seller }) => seller && seller._id === loggedInUser._id)
        this.setState({ itemsToShow })
    }
    render() {

        const { loggedInUser } = this.props
        const { itemsToShow } = this.state
        if (!loggedInUser || !itemsToShow) return <h1>Loading..</h1>
        if (itemsToShow.length === 0) return <h1>There is no items for you .. add some :)</h1>
        return (
            <>
                <h2 className="hello-seller">👋Helllo {loggedInUser.fullname}</h2>
                <div className="back-office-seller">
                    <ItemEdit className="add-Item-back" currItem={this.state.currItem} user={this.props.loggedInUser} loadUserItems={this.loadUserItems} />
                    <div className="item-container">
                        {itemsToShow && itemsToShow.map(item =>
                            <div key={item._id} className="item" >
                            <ItemPreview item={item} onEdit={this.onEdit} removeable={true} /></div>
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
