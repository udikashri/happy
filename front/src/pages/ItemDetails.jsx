import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
// import { itemService } from '../service/itemService.js'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'

class _ItemDetails extends Component {

  state = {
    item: null,
  }

//   componentDidMount() {
//     this.loadItem()
//   }

//   loadItem = async () => {
//     const { itemId } = this.props.match.params
//     const item = await itemService.getById(itemId)
//     this.setState({ item })

//   }

//   onRemove = (itemId) => {
//     console.log(this.state.item);
//     this.props.removeItem(itemId)
//     this.props.history.push('/item')

//   }


  render() {
    // const { item } = this.state;
    // const { loggedInUser } = this.props
    // if (!item) return <h1>Loading...</h1>
    return (
      <section className="item-details">
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
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    // items: state.itemModule.items,
    // loggedInUser: state.userModule.loggedInUser,
  }
}

const mapDispatchToProps = {
  // removeItem,
}

export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);