import React, { Component } from 'react'

export class Order extends Component {
    // accepted  sent arrive
    state = {
        order: {
            buyer: {
                "_id": "0DKUfiuZaj7F",
                "fullname": "Deeann Stirling",
                imgUrl: "https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/30_nvklsm.jpg"
            },
            "totalPrice": 27,
            "seller": {
                "_id": "dhoSPowvM",
                "name": "Zack Jordan",
                "imgUrl": "https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/15_pj1iel.jpg"
            },
            "items": {
                "_id": "6006ba5c22fe2c973b73ed41",
                "name": "Tacosaurus Socks",
                "amount": 3
            },
            "status": "accepted",
            "date": {
                "month": 1,
                "day": 15
            },
        }
    }

    onChangStatus = () => {
        var { order } = this.state
        order.status = order.status === "accepted" ? "sent" : "arrive"
        console.log('onChangStatus');
        this.setState({ order })
    }

    render() {
        // if (!review.by) return
        const { order } = this.state
        console.log('img', order.buyer.fullname);
        return <section className="order">
            order
            {/* ********************** Buyer Info ******************* */}
            <div>{order.buyer.fullnames}</div>
            <div className="item">{order.items.name}</div>
            <div className="item">{order.items.amount}</div>
    <div>{order.date.day}-{order.date.month}-{order.date.month == 1 ? 21 : 20}</div>
            <div className="status" style={{ "background-color": order.status === "accepted" ? "red" : order.status === "sent" ? "yellow" : "rgb(166, 255, 0)" }} onClick={this.onChangStatus} >{order.status}</div>
        </section>
    }
}
