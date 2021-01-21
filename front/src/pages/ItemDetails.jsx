import { connect } from 'react-redux'
import React, { Component } from 'react'
import { itemService } from '../services/itemService.js'
import { loadItems, removeItem, saveItem/*, setFilter*/ } from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
import { Review } from '../cmps/Review'
// import { ItemEdit } from '../cmps/ItemEdit'
import { Link } from 'react-router-dom'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
class _ItemDetails extends Component {
  state = {
    currItem: { title: '', imgUrl: '', price: 0, _id: '' },
    seller: null,
    sellers: {},
    amount: 1,
    modalVisibility: 'visible',
    rate: {
      stars: '',
      avg: 0
    }
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
    // this.props.loadSellers()
    const sellers = await this.props.sellers;
    const seller = sellers.filter(seller => {
      return seller._id === sellerId
    })
    this.setState({ seller: seller[0], sellers: sellers }, () => {
      this.rateCalculator(seller[0].reviews)
    })
  }

  rateCalculator = (reviews) => {
    var rateSum = reviews.reduce((accumulator, review) => {
      return accumulator + review.rate
    }, 0)

    const avg = rateSum / reviews.length;
    var stars = ''
    for (var i = 0; i < Math.floor(avg); i++) {
      stars += '⭐'
    }
    const rate = { stars, avg: avg.toFixed(2) }
    this.setState({ rate: rate })
  }

  onSaveItem = (ev, newItem) => {
    ev.preventDefault()
    this.props.saveItem(newItem)
    this.setState({ currItem: newItem })
    this.props.history.push('/shop')
  }


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
  }


  render() {
    const { currItem, seller, amount, rate } = this.state
    // if (seller) console.log('seller', seller);
    // if (!currItem) return
    return (

      <section className="item-details">
        {/* <img  src={plus}/> */}

        <img className="item-image" src={currItem.imgUrl} />



        {/* ************* Item Info  ********************* */}
        <div className="item-info">
          <div className="header">
            <h1>{currItem.title}</h1>
            <div className="price">${currItem.price}.00</div>
          </div>


          {/* *************** Seller Previwe ****************    */}
          {seller && <div className="seller-preview">
            <img src={seller.user.imgUrl} />
            <span> {seller.name}</span>
            <span className="best-seller"> best seller </span>
            <span>{rate.stars}</span>
          </div>}

          {/* *************** Change Amount ****************    */}
          <h3>How Much Pairs would You Like?</h3>
          <div className="amount">
            <div onClick={(ev) => this.onChangeAmount(ev, -1)} className="change-amount">-</div>
            <div>{amount}</div>
            <div onClick={(ev) => this.onChangeAmount(ev, 1)} className="change-amount">+</div>
          </div>

          <div onClick={this.openModal} className="buy">Buy Me </div>
          {/* <div className="buy"><Link to={"/thank"}>Buy Me  </Link></div> */}

          <div className="description">{currItem.description}</div>

          {/* <button onClick={() => this.onRemove(currItem._id)} className="delete-btn">Delete</button> */}
          {/* <ItemEdit currItem={currItem} onSaveItem={this.onSaveItem} /> */}
        </div>
        <section className="border-seprator"></section>

        {/* ************* Item Reviews  ********************* */}

        <div className="reviews">
          <h3>reviews:</h3>
          {seller && seller.reviews.map(review => {
            return <Review key={review.id} review={review} />
          })}

        </div>

        {/* ************* Seller Info  ********************* */}
        <div className="seller-details">
          <h3>About The Seller</h3>
          {seller &&
            <div className="info">
              <img src={seller.user.imgUrl} />
              <div>
                <h4> {seller.user.fullname}</h4>
                <h5>{seller.address}</h5>
                <div> {rate.stars} {rate.avg} ({seller.reviews.length}  {seller.reviews.length === 1 ? "review" : "reviews"})</div>
              </div>
            </div>
          }
          <div className="content-me">Content Me</div>
        </div>

        {/***************    Order Modal   ***************/}
        <section onClick={this.openModal} style={{ visibility: this.state.modalVisibility }} className="modal-background"></section>
        <div style={{ visibility: this.state.modalVisibility }} className="order-info-modal" >
          {/* <div className="item">

            <div className="title"> {currItem.title}</div>
            <div className="amount">
              <div onClick={(ev) => this.onChangeAmount(ev, -1)} className="changeAmount">-</div>
              <div>{amount}</div>
              <div onClick={(ev) => this.onChangeAmount(ev, 1)} className="changeAmount">+</div>
            </div>
            <div className="total-price">{amount * currItem.price}</div>
          </div>
          <Link to={"/thank"}>Order</Link> */}


          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
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