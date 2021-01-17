import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { itemService } from '../services/itemService.js'
import { loadItems, removeItem, saveItem/*, setFilter*/ } from '../store/actions/itemActions'
import { ItemEdit } from '../cmps/ItemEdit'
// import { Link } from 'react-router-dom'
// import { ItemReview } from './ItemReview'
// import { removeItem } from '../store/actions/itemActions.js'

class _ItemDetails extends Component {
  state = {
    currItem: {title:'',imgUrl:'',price:0,_id:''}
  }
  async componentDidMount() {
    await this.props.loadItems()
    this.loadItem()
  }

  loadItem = () => {
    const { itemId } = this.props.match.params
    const selectItem = this.props.items.filter(item => {
      return +itemId === item._id
    })
    this.setState({ currItem: selectItem[0] })
  }

  onSaveItem = (ev,newItem) => {
    ev.preventDefault()
    this.props.saveItem(newItem)
    this.setState({currItem:newItem})
    this.props.history.push('/shop')
  }
 

  onRemove = () => {
    this.props.removeItem(this.state.currItem._id)
    this.props.history.push('/shop')
  }

  render() {
    // const { item } = this.state;
    // const { loggedInUser } = this.props
    const { currItem } = this.state
    // if (!currItem) return <h1>Loading...</h1>
    return (
      <section className="item-details">
        <p>{currItem.title}</p>
        <img src={currItem.imgUrl} alt="" />
        <button onClick={() => this.onRemove(currItem._id)} className="delete-btn">Delete</button>
        <h1>item details</h1>
        <ItemEdit currItem={currItem} onSaveItem={this.onSaveItem} />
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
  removeItem,
  saveItem
  //     // setFilter,
  //     // logout,
}

export const ItemDetails = connect(mapStateToProps, mapDispatchToProps)(_ItemDetails);