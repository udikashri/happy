import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import React, { Component } from 'react'

export class Review extends Component {


  onRemove = async (ev , itemId) => {
    ev.stopPropagation()
    // await 
    this.props.removeItem(itemId)
    // this.props.history.push('/shop')
  }


  render() {
      const {review} = this.props
      console.log("review", review.by);
    return <section className="card-main">
        {review.by.fullname}
        <img src= {review.by.imgUrl}/>
{review.rate}
{review.item.title}
<div>{review.txt}</div>
    </section>
  }
}
