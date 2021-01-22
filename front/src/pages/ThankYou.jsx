import { connect } from 'react-redux'
import { Component } from "react";
import { Link } from "react-router-dom";
import { getOrder } from '../store/actions/orderActions'
import { loadItems } from '../store/actions/itemActions'
import { ItemList } from '../cmps/ItemList'

class _ThankYou extends Component {
    state = {
        items: [],
        order: {
            amount: 2,
            title: 'Busy Making a Fucking Difference Socks',
            tag: ''
        }
    }

    componentDidMount() {
        const newOrder = this.props.order
        this.setState({ order: newOrder })
        var items = this.props.items.filter((item,i) => {
            return item.tags.some(tag => {
                return tag === newOrder.tag
            })
              

        })
        items = items.slice(0, 4)
        console.log(404, items);
        this.setState({ items: items })

    }



    render() {
        const { order, items } = this.state
        return (
            <section className="thank-you">
                <div className="thank-msg">
                    <div>Your {order.amount !== 1 && order.amount} {order.amount === 1 ? "pair" : "pairs"} of "{order.title}" Socks Is On The Way</div>
                    <Link to={'/shop'}>C<span>o</span>ntinue Sh<span>o</span>ping</Link>
                </div>

                <div className="speech half">thank you for you purchase</div>
                <img src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611052878/atmosphere/3485-removebg-preview_1_gy43es.png" alt="img" />
                < ItemList items={items} />
            </section>)


    }
}


const mapStateToProps = state => {
    return {
        items: state.itemModule.items,

        order: state.orderModule.order,
    }
}

const mapDispatchToProps = {
    getOrder

}

export const ThankYou = connect(mapStateToProps, mapDispatchToProps)(_ThankYou);
