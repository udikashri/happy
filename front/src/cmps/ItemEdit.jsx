import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { itemService } from '../services/itemService.js'
import { saveItem } from '../store/actions/itemActions.js'
// import { Uploader } from './Uploader.jsx';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';

export class _ItemEdit extends Component {

  state = {
    item: {
      name: '',
      // price: 1,
      // type: '',
      // inStock: false,
      // imgUrl: ''
    },
  };

  async componentDidMount() {
    var {item} = this.state
    await console.log('sdsds',this.props.item);
    item.name = this.props.item.title
    this.setState({})
  }

  // loadItem = async () => {
  //   const { itemId } = this.props.match.params;
  //   if (itemId) {
  //     const item = await itemService.getById(itemId)
  //     this.setState({ item })
  //   }
  // }

  handleInput = ({ target }) => {
    const { name, type } = target
    const value = (type === 'checkbox') ? target.checked :
      (type === 'number') ? +target.value : target.value

    this.setState(prevState => {
      return {
        item: {
          ...prevState.item,
          [name]: value
        }
      }
    })
  }

  // onUploadItemImage = (url) => {
  //   this.setState(prevState => {
  //     return {
  //       item: {
  //         ...prevState.item,
  //         imgUrl: url
  //       }
  //     }
  //   })
  //   console.log('img url', url);
  // }

  onSaveItem = async (ev) => {
    ev.preventDefault()
    const { item } = this.state
    console.log('item!!!!!!!', item)
    await this.props.saveItem(item)
    this.props.history.push('/item')
  }

  render() {
    const { item } = this.state;
    return (
      <section className="edit-box">
        <h1>{item._id ? 'Edit Item' : 'Add Item'}</h1>
        <form onSubmit={this.onSaveItem} className="new-item-form">
          <label >Name:  <input type="text" name="name" value={item.name} onChange={this.handleInput} autoComplete="off" /></label>
          {/* <label >Price: <input type="number" name="price" value={item.price} onChange={this.handleInput} /></label> */}
          {/* <label >Type:  <input type="text" name="type" value={item.type} onChange={this.handleInput} /></label> */}
          {/* <label>Type: <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={item.type}
                    onChange={this.handleInput}
                >
                    <MenuItem selected value="Family">Family</MenuItem>
                    <MenuItem value="Educational">Educational</MenuItem>
                    <MenuItem value="Funny">Funny</MenuItem>
                    <MenuItem value="Adult">Adult</MenuItem>
                </Select></label>  */}
          {/* <label >In Stock? <input type="checkbox" name="inStock" checked={item.inStock} onChange={this.handleInput} /></label>
          <Uploader onFinishUpload={this.onUploadItemImage} /> */}
          <button className={this.state.item.imgUrl ? '' : 'disabled'}>Save</button>
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
