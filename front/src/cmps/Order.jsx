import React, { Component } from 'react'

export class Order extends Component {
   
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
            "status": "order",
            "date": {
                "month": 1,
                "day": 15
            },
        }
    }

    onChangStatus = () => {
        // var { order } = this.state
        // order.status = "shiped";
        // this.setState({ order })
    }

    render() {
        // if (!review.by) return
        const { order } = this.props
        console.log('img', order.buyer.fullname);
        return <tr className="order">
            <td>{ order.buyer.fullname}</td>
            <td>{order.items.name}</td>
    <td>{order.items.amount}</td>
            <td>{order.totalPrice}</td>
            <td>{order.date.day}-{order.date.month}-{order.date.month == 1 ? 21 : 20}</td>
            <td>{order.status }</td>
{/* 
            ********************** Buyer Info *******************
            <div>{order.buyer.fullnames}</div>
            <div className="item"> <span className="key">item: </span>{order.items.name}</div>
            <div className="item"><span className="key">amount: </span>{order.items.amount}</div>
            <div>{order.date.day}-{order.date.month}-{order.date.month == 1 ? 21 : 20}</div>
            <div className="status" style={{ "background-color": order.status === "order" ? "#EE6055" : "#60D394" }} onClick={this.onChangStatus} >{order.status}</div> */}
        </tr>
    }
}
