import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { _ItemEdit } from '../cmps/ItemEdit'
import { loadItems } from '../store/actions/itemActions'
import { ItemPreview } from '../cmps/ItemPreview'
// import { ItemAdd } from '../cmps/ItemAdd'
import { ItemEdit } from '../cmps/ItemEdit'
import { Order } from '../cmps/Order'

// import { SellerDeatails } from '../cmps/SellerDeatails'

export class _Dashboard extends Component {
    state = {
        order: [{
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
        }, {
            "buyer": {
                "_id": "Xh9nMze",
                "fullname": "Richard Horton",
                "imgUrl": "https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/7_gdn9xw.jpg"
            },
            "totalPrice": 11,
            "seller": {
                "_id": "YjSm4WSQhwbp",
                "fullname": "Jasmine Aleksahkin",
                "imgUrl": "https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/27_zdptgs.jpg"
            },
            "items": {
                "_id": "6006ba5e22fe2c973b73ee68",
                "name": "Lift Socks",
                "amount": 1
            },
            "status": "shiped",
            "date": {
                "month": 12,
                "day": 6
            }
        }
        ]
    }


    async componentDidMount() {


    }


    render() {

        return (
            <div className="dashboard">
                dash board
                orders:

                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Item</th>
                        <th>Total Price</th>
                    </tr>
                </table>
                <Order />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {

        loggedInUser: state.userModule.loggedInUser,
        items: state.itemModule.items
    }
}

const mapDispatchToProps = {
    loadItems

}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard);
