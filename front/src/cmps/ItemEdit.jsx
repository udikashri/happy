import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveItem, editItem } from '../store/actions/itemActions.js'
import { Uploader } from './Uploader';


export class _ItemEdit extends Component {

  state = {
    currItem: {
      type: "socks",
      title: "",
      price: 0,
      color: "black",
      seller: {
        _id: "kwmXcp",
        name: "Kaila Melonby",
        imgUrl: "http://dummyimage.com/129x121.jpg/cc0000/ffffff"
      },
      description: "moratorium",
      imgUrl: "https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg",
      tags: [
        "one",
        "tow"
      ]
    }
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
        <form onSubmit={(event) => { this.props.onSaveItem(event, currItem) }}>
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
  editItem
}

export const ItemEdit = connect(mapStateToProps, mapDispatchToProps)(_ItemEdit)
