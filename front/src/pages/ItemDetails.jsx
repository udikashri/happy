import { connect } from 'react-redux'
import React, { Component } from 'react'
import { itemService } from '../services/itemService.js'
import { loadItems/*, removeItem, setFilter*/ } from '../store/actions/itemActions'
// import { Link } from 'react-router-dom'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'

class _ItemDetails extends Component {
state = {
  currItem:{}
}
  async componentDidMount() {

    await this.props.loadItems()
    console.log('Got from store:', this.props)
    this.loadItem()
  }

  loadItem = () => {
    const { itemId } = this.props.match.params
    const selectItem = this.props.items.filter(item => {
      return  +itemId === item._id })
    console.log('dsd',...selectItem);
  this.setState({currItem:selectItem[0]})
    // const item = await itemService.getById(itemId)
    // this.setState({ item })
  }

  //   onRemove = (itemId) => {
  //     console.log(this.state.item);
  //     this.props.removeItem(itemId)
  //     this.props.history.push('/item')
  //   }

  render() {
    // const { item } = this.state;
    // const { loggedInUser } = this.props
const { currItem} = this.state
console.log("currItem",currItem);
    // if (!item) return <h1>Loading...</h1>
    return (
      <section className="item-details">
                <p>{currItem.title}</p>
        <img src={currItem.imgUrl} alt=""/>
        {/* <div className="item-desc">
          <div className="right-desc">
            <h1>{item.name}</h1>
            <img src={ item.imgUrl? item.imgUrl : `https://robohash.org/${item._id}?set=set3`} />
          </div>
          <div className="left-desc">
            <h4>Price: ${item.price}</h4>
            <h5>Item type: {item.type}</h5>
            <h4>Description: </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis dolores explicabo ut eligendi non omnis molestiae voluptatem, officia ipsa vero magni pariatur quibusdam exercitationem nam nesciunt aliquam assumenda ullam?</p>
            <p>{item.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        </div>
        <div className="details-btn">
          {loggedInUser.isAdmin && <button onClick={() => this.onRemove(item._id)} className="delete-btn">Delete</button>}
          {loggedInUser.isAdmin && <button className="edit-btn"><Link to={`/item/edit/${item._id}`}>Edit</Link></button>}
        </div>
        <ItemReview itemId={this.props.match.params.itemId}/> */}
        <h1>item details</h1>
        {/* <p>{item.title}</p>
        <img src={item.imgUrl} alt=""/> */}
      </section>
    )
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
  //     // removeItem,
  //     // setFilter,
  //     // logout,
}

export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);