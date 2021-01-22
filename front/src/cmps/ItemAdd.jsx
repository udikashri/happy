import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveItem } from '../store/actions/itemActions.js'
import { Uploader } from './Uploader';


export class _ItemAdd extends Component {

  state = {
    currItem: null
  }

   async componentDidMount() {
    const currItem  =   {
        type: "socks",
        title: "",
        price: 0,
        color: "black",
        seller: {
          imgUrl: "http://dummyimage.com/129x121.jpg/cc0000/ffffff"
        },
        description: "moratorium",
        imgUrl: "https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg",
        tags: [
          "one",
          "tow"
        ]
      }
    this.setState({currItem})

  }

  handleInput = ({ target }) => {
    const { name, value } = target
    this.setState(prevState => {
      return {
        currItem: {
          ...prevState.currItem,
          [name]: value
        }
      }
    })
  }

  onUploadItemImage = (url) => {
    this.setState(prevState => {
      return {
        currItem: {
          ...prevState.currItem,
          imgUrl: url
        }
      }
    })
    // console.log('img url', url);
  }

  onSaveItem = async (ev) => {
    ev.preventDefault()
    const  item = this.state.currItem
    item.seller._id = this.props.user._id
    item.seller.fullname = this.props.user.fullname
    await this.props.saveItem(item)
    this.props.loadUserItems()
  }
  render() {
    const { currItem } = this.state;
    if (!currItem) return <h1>Loading.....</h1> 
    return (
      <section className="edit-box">
        <form onSubmit={(event)=>{this.onSaveItem(event)}}>
        <input autoFocus type="text" value={currItem.title} onChange={this.handleInput} name="title" />
        <label >Price: <input type="number" name="price" value={currItem.price} onChange={this.handleInput} /></label>
        <Uploader onFinishUpload={this.onUploadItemImage} />
        <button>Save</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemModule.items
  }
}

const mapDispatchToProps = {
  saveItem,
  
}

export const ItemAdd = connect(mapStateToProps, mapDispatchToProps)(_ItemAdd)
