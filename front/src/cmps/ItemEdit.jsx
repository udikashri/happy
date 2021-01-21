import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveItem } from '../store/actions/itemActions.js'
import { Uploader } from './Uploader'
import { PickColor } from './PickColor'
// import NotInterestedIcon from '@material-ui/icons/NotInterested'


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

  componentDidMount() {
    const currItem  =   {
        // type: "",
        title: '',
        price: 0,
        color: '',
        seller: {
          _id:'E4G3Ck',
          fullname:'Amelia Larson',
          imgUrl:'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/3_nz6vkf.jpg'
        },
        description: '',
        imgUrl: 'https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg',
        tags: [
          ''
        ],
        likes:'',
        details:''
      }
    this.setState({currItem})

  }

  onSaveItem = async (ev) => {
    ev.preventDefault()
    const  item = this.state.currItem
    // item.seller._id = this.props.user._id
    // item.seller.fullname = this.props.user.fullname
    // item.seller.imgUrl = this.props.user.imgUrl
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
  handleTagsInput = ({ target }) => {
    var { name, value } = target
    console.log(    value.split(','))
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

  handleChangeColor = (color) => {
    console.log(color);
    this.setState(prevState => ({ currItem: { ...prevState.currItem, color: color } }), () => {
    })
}

  render() {
    const { currItem } = this.state;
    if (!currItem) return <h1>Loading.....</h1>
    return (
      <section className="edit-box">
        <form onSubmit={(event) => { this.onSaveItem(event) }}>
          <input autoFocus type="text" value={currItem.title} onChange={this.handleInput} name="title" placeholder="Add Item" autoComplete="off" />
          <input autoFocus type="text" value={currItem.tags} onChange={this.handleTagsInput} name="tags" placeholder="Animal,Art" autoComplete="off" />
          <input autoFocus type="text" value={currItem.seller._id} onChange={this.handleInput} name="_id" placeholder="sellerId" autoComplete="off" />
          <input autoFocus type="text" value={currItem.seller.fullname} onChange={this.handleInput} name="fullname" placeholder="sellerFullname" autoComplete="off" />
          <input autoFocus type="text" value={currItem.seller.imgUrl} onChange={this.handleInput} name="imgUrl" placeholder="sellerImgUrl" autoComplete="off" />
          <input autoFocus type="text" value={currItem.likes} onChange={this.handleInput} name="likes" placeholder="Likes" autoComplete="off" />
          <input autoFocus type="text" value={currItem.details} onChange={this.handleInput} name="details" placeholder="Details" autoComplete="off" />
                    {/* <input autoFocus type="text" value={currItem.type} onChange={this.handleInput} name="type" placeholder="Add Type" autoComplete="off" /> */}
          <textarea rows="5" autoFocus type="text" value={currItem.description} onChange={this.handleInput} name="description" placeholder="Add Description" autoComplete="off" />
          <label >Price: <input type="number" min="0" name="price" value={currItem.price} onChange={this.handleInput} /></label>
          <PickColor handleChangeColor={this.handleChangeColor} />
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
