import React, { Component } from 'react'

export class Review extends Component {




    render() {
        const { review } = this.props
        return <section className="review">

            <div className="by-info">
                <img src={review.by.imgUrl} alt="img"/>
                <div>
                    <h5>{review.by.fullname}              ⭐<span>{review.rate}</span></h5>
                    
                    <h6>Purchased Socks - {review.item.title}</h6>
                </div>
            </div>
            <div className="review-text">{review.txt}</div>
        </section>
    }
}
