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
    await this.props.loadItems()
    this.loadItem()
    this.loadSeller()
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.sellers !== this.props.sellers) {
      await this.props.loadItems()
      this.loadItem()
      this.loadSeller()
    }
  }


  loadItem = () => {
    const { itemId } = this.props.match.params
    const selectItem = this.props.items.filter(item => {
      return +itemId === item._id
    })
    this.setState({ currItem: selectItem[0] }, () => {
      console.log("seletItem", selectItem[0]);
    })
  }

  loadSeller = () => {
    const sellerId = this.state.currItem.seller._id

    console.log(123, this.props.sellers);
    this.props.loadSellers()
    console.log('loading', this.props.sellers);
    const sellers = this.props.sellers;
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
    // if (!seller) return (
    //   <div>Loding...</div>
    // )
    console.log('seller', seller);
    return (
      <section className="item-details">
        <img src={currItem.imgUrl} alt="" />
        <div className="item-info">
          <h1>{currItem.title}</h1>
          <div className="price">{currItem.price}$</div>
          <div className="seller-preview">
            {/* <img src={seller.user.imgUrl} /> */}

            {/* {seller.name} */}
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