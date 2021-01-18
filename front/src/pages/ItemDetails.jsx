import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { itemService } from '../services/itemService.js'
import { loadItems, removeItem, saveItem/*, setFilter*/ } from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
import { ItemEdit } from '../cmps/ItemEdit'
// import { Link } from 'react-router-dom'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'

class _ItemDetails extends Component {
  state = {
    currItem: { title: '', imgUrl: '', price: 0, _id: '' },
    seller: { name: 'udi', user: { imgUrl: '' } },
    sellers:{}
  }
  async componentDidMount() {
    this.props.loadItems()
    this.loadItem()
    await this.props.loadSellers()
    this.loadSeller()
  }

  loadItem = () => {
    const { itemId } = this.props.match.params
    const selectItem = this.props.items.filter(item => {
      return +itemId === item._id
    })
    this.setState({ currItem: selectItem[0] }, () => {
    })
  }

  loadSeller = async () => {
    const sellerId = this.state.currItem.seller._id
    this.props.loadSellers()
    const sellers = await this.props.sellers;
    const seller = sellers.filter(seller => {
      return seller._id === sellerId
    })
    this.setState({ seller: seller[0], sellers: sellers})
  }

  onSaveItem = (ev, newItem) => {
    ev.preventDefault()
    this.props.saveItem(newItem)
    this.setState({ currItem: newItem })
    this.props.history.push('/shop')
  }


  onRemove = () => {
    this.props.removeItem(this.state.currItem._id)
    this.props.history.push('/shop')
  }

  render() {
    const { currItem, seller } = this.state
    return (
      <section className="item-details">
        <img src={currItem.imgUrl} alt="" />
        <div className="item-info">
          <h1>{currItem.title}</h1>
          <div className="price">{currItem.price}$</div>
          <div className="seller-preview">
            {/* <img src={seller.user.imgUrl} /> */}
            {seller.name}
          </div>
          <button onClick={() => this.onRemove(currItem._id)} className="delete-btn">Delete</button>
          {/* <ItemEdit currItem={currItem} onSaveItem={this.onSaveItem} /> */}
        </div>

      </section>
    )
  }
}

const mapStateToProps = state => {
  return {

    items: state.itemModule.items,
    sellers: state.sellerModule.sellers,
    // filterBy: state.itemModule.filterBy,
    // loggedInUser: state.userModule.loggedInUser,
  }
}


const mapDispatchToProps = {
  loadItems,
  removeItem,
  saveItem,
  loadSellers
  //     // setFilter,
  //     // logout,
}

export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);