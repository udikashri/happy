import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveItem } from '../store/actions/itemActions.js'
import { Uploader } from './Uploader';


export class _ItemEdit extends Component {

  // state = {
  //   currItem: {
  //     type: "",
  //     title: "",
  //     price: 0,
  //     color: "",
  //     seller: {
  //       _id: "kwmXcp",
  //       name: "Kaila Melonby",
  //       imgUrl: "http://dummyimage.com/129x121.jpg/cc0000/ffffff"
  //     },
  //     description: "",
  //     imgUrl: "https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg",
  //     tags: [
  //       "one",
  //       "tow"
  //     ]
  //   }
  // }
  state = {
    currItem: null
  }

  async componentDidMount() {
    const currItem  =   {
        // type: "",
        title: "",
        price: 0,
        color: "",
        seller: {
        },
        description: "",
        imgUrl: "https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg",
        tags: [
          "one",
          "tow"
        ]
      }
    this.setState({currItem})

  }

  onSaveItem = async (ev) => {
    ev.preventDefault()
    const  item = this.state.currItem
    item.seller._id = this.props.user._id
    item.seller.fullname = this.props.user.fullname
    item.seller.imgUrl = this.props.user.imgUrl
    await this.props.saveItem(item)
    this.props.loadUserItems()
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currItem !== this.props.currItem) {
      const { currItem } = this.props
      console.log(await currItem);
      this.setState({ currItem })
    }
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
    console.log('img url', url);
  }

  render() {
    const { currItem } = this.state;
    if (!currItem) return <h1>Loading.....</h1>
    return (
      <section className="edit-box">
        <form onSubmit={(event) => { this.onSaveItem(event) }}>
          <input autoFocus type="text" value={currItem.title} onChange={this.handleInput} name="title" placeholder="Add Item" autoComplete="off" />
          <input autoFocus type="text" value={currItem.color} onChange={this.handleInput} name="color" placeholder="Add Color" autoComplete="off" />
          {/* <input autoFocus type="text" value={currItem.type} onChange={this.handleInput} name="type" placeholder="Add Type" autoComplete="off" /> */}
          <textarea rows="5" autoFocus type="text" value={currItem.description} onChange={this.handleInput} name="description" placeholder="Add Description" autoComplete="off" />
          <label >Price: <input type="number" min="0" name="price" value={currItem.price} onChange={this.handleInput} /></label>
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

export const ItemEdit = connect(mapStateToProps, mapDispatchToProps)(_ItemEdit)
