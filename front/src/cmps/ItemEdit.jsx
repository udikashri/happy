import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveItem, editItem } from '../store/actions/itemActions.js'

export class _ItemEdit extends Component {

  state = {
    currItem: {
      title: '',
      price: ''
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

  render() {
    const { currItem } = this.state;

    if (!currItem) return <h1>Loading.....</h1>
    return (
      <section className="edit-box">
        <form onSubmit={(event) => { this.props.onSaveItem(event, currItem) }}>
          <input autoFocus type="text" value={currItem.title} onChange={this.handleInput} name="title" />
          <label >Price: <input type="number" name="price" value={currItem.price} onChange={this.handleInput} /></label>
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
