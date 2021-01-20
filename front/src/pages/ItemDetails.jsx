import { connect } from 'react-redux'
import React, { Component } from 'react'
import { itemService } from '../services/itemService.js'
import { loadItems, removeItem, saveItem/*, setFilter*/ } from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
// import { ItemEdit } from '../cmps/ItemEdit'
import { Link } from 'react-router-dom'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'
// import {plus} from '../assets/icons/plus.png'

class _ItemDetails extends Component {
  state = {
    currItem: { title: '', imgUrl: '', price: 0, _id: '' },
    seller: { name: 'udi', user: { imgUrl: '' } },
    sellers: {},
    amount: 1,
    modalVisibility:'hidden'
  }
  async componentDidMount() {
    await this.props.loadItems()
    this.loadItem()
    await this.props.loadSellers()
    this.loadSeller()
  }

  loadItem = () => {
    const { itemId } = this.props.match.params
    const selectItem = this.props.items.filter(item => {
      return itemId === item._id
    })
    this.setState({ currItem: selectItem[0] }, () => {
    })
  }

  loadSeller = async () => {
    const sellerId = this.state.currItem.seller._id
    console.log(sellerId);
    this.props.loadSellers()
    const sellers = await this.props.sellers;
    console.log(await sellers);
    // const seller = sellers.filter(seller => {
    //   return seller._id === sellerId
    // })
    // this.setState({ seller: seller[0], sellers: sellers })
  }

  onSaveItem = (ev, newItem) => {
    ev.preventDefault()
    this.props.saveItem(newItem)
    this.setState({ currItem: newItem })
    this.props.history.push('/shop')
  }


  // onRemove = async () => {
  //   console.log('h');
  //   await this.props.removeItem(this.state.currItem._id)
  //   this.props.history.push('/shop')
  // }

  onChangeAmount = (ev, add) => {
    ev.preventDefault()
    var { amount } = this.state
    amount += add;
    if (amount < 0) amount = 0
    this.setState({ amount: amount })
  }

  openModal = () => {
    var { modalVisibility } = this.state
    if (modalVisibility === 'hidden') modalVisibility = 'visible'
    else modalVisibility = 'hidden'
    this.setState({ modalVisibility: modalVisibility })
    console.log(1,this.state.modalVisibility);
}
  render() {
    const { currItem, seller, amount } = this.state
    // if (!currItem) return
    return (

      <section className="item-details">
        {/* <img  src={plus}/> */}

        <img src={currItem.imgUrl} alt="" />
        <div className="item-info">
          <h1>{currItem.title}</h1>
          <div className="price">{currItem.price}$</div>
          {seller && <div className="seller-preview">
            <img src={seller.user.imgUrl} />
            {seller.name}
          </div>}
          <div className="amount">
            <div onClick={(ev) => this.onChangeAmount(ev, -1)} className="changeAmount">-</div>
            <div>{amount}</div>
            <div onClick={(ev) => this.onChangeAmount(ev, 1)} className="changeAmount">+</div>
          </div>

          <div onClick={this.openModal} className="buy">Buy Me </div>
          {/* <div className="buy"><Link to={"/thank"}>Buy Me  </Link></div> */}

          {/* <div className="buy"><Link to={"/thank"}>Buy Me  </Link></div> */}
          <div className="description">{currItem.description}</div>

          <button onClick={() => this.onRemove(currItem._id)} className="delete-btn">Delete</button>
          {/* <ItemEdit currItem={currItem} onSaveItem={this.onSaveItem} /> */}
        </div>
        <div style={{ visibility: this.state.modalVisibility }} className="countries-modal" >
kkkkkkkkkkkkkkk
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