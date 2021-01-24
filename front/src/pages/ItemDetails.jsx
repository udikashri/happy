import { connect } from 'react-redux'
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loadItems, removeItem, saveItem/*, setFilter*/ } from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
import { setOrder } from '../store/actions/orderActions'
import { Review } from '../cmps/Review'
// import { ItemEdit } from '../cmps/ItemEdit'
import { Link } from 'react-router-dom'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
class _ItemDetails extends Component {
  state = {
    currItem: { title: '', imgUrl: '', price: 0, _id: '' },
    seller: null,
    sellers: {},
    amount: 1,
    modalVisibility: 'hidden',
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
    const selectItem = this.props.items.find(item => itemId === item._id)
    this.setState({ currItem: selectItem }, () => {
    })
  }

  loadSeller = async () => {
    const sellerId = this.state.currItem.seller._id
    // this.props.loadSellers()
    const sellers = await this.props.sellers;
    const seller = sellers.find(seller => {
      return seller._id === sellerId
    })
    this.setState({ seller: seller, sellers: sellers }, () => {
      this.rateCalculator(seller.reviews)
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

  onOrder = () => {
    const { amount } = this.state
    const { title } = this.state.currItem
    const tag = this.state.currItem.tags ? this.state.currItem.tags[0] : ''
    const order = { amount, title, tag }
    this.props.setOrder(order)
  }

  render() {
    const { currItem, seller, amount, rate } = this.state
    if (!currItem.imgUrl) return (
      <div className="center">
        <CircularProgress />
      </div>
    )

    return (

      <section className="item-details">

        <img className="item-image" src={currItem.imgUrl} alt="img" />



        {/* ************* Item Info  ********************* */}
        <div className="item-info">
          <div className="header">
            <h1>{currItem.title}</h1>
            <div className="price">${currItem.price}.00</div>
          </div>


          {/* *************** Seller Previwe ****************    */}
          {seller && <div className="seller-preview">
            <img src={seller.user.imgUrl} alt="img" />
            <span> {seller.name}</span>
            <span className="best-seller"> best seller </span>
            <span>{rate.stars}</span>
          </div>}

          {/* *************** Change Amount ****************    */}
          <h3>How Many Pairs would You Like?</h3>
          <div className="amount">
            <div onClick={(ev) => this.onChangeAmount(ev, -1)} className="change-amount">-</div>
            <div>{amount}</div>
            <div onClick={(ev) => this.onChangeAmount(ev, 1)} className="change-amount">+</div>
          </div>

          <div onClick={this.openModal} className="buy">Buy Me </div>

          <div className="description">{currItem.description}</div>
          <div className="tag-title">Related Tags:</div>
          <div className="tags-container">
            {currItem.tags.map(tag => {
              return <div className="tag">
                <Link onClick={this.onOrder} to={`/shop?tag=${tag}`}>{tag}</Link>


              </div>
            })}
          </div>
        </div>
        <section className="border-seprator"></section>

        {/* ************* Seller Reviews  ********************* */}

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
              <img src={seller.user.imgUrl} alt="img" />
              <div>
                <h4> {seller.user.fullname}</h4>
                <h5>{seller.address}</h5>
                <div> {rate.stars} {rate.avg} ({seller.reviews.length}  {seller.reviews.length === 1 ? "review" : "reviews"})</div>
              </div>
            </div>
          }
          <div className="content-me">Contact Me</div>
        </div>

        {/***************    Order Modal   ***************/}
        <section onClick={this.openModal} style={{ visibility: this.state.modalVisibility }} className="modal-background"></section>
        <div style={{ visibility: this.state.modalVisibility }} className="order-info-modal" >

          <h3><ShoppingCartSharpIcon /> Cart Details</h3>
          <div onClick={this.openModal} className="close"><HighlightOffIcon /></div>
          <table>
            <tr>
              <th>Card Details</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Item</th>
              <th>Total Price</th>
            </tr>
            <tr>
              <td><CreditCardIcon /><MoreHorizIcon /></td>
              <td>${currItem.price}</td>
              <td>{amount}</td>
              <td>{currItem.title}</td>
              <td>${currItem.price * amount}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Shiping</td>
              <td>$56</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="final-price">${currItem.price * amount + 56}</td>
            </tr>
          </table>
          <Link onClick={this.onOrder} to={"/thank"}>Order</Link>
          {/* <Link onClick={this.onOrder}>Order</Link> */}


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
  loadSellers,
  setOrder
}

export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);