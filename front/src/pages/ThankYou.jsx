import { connect } from 'react-redux'
import { Component } from "react";
import { Link } from "react-router-dom";
import { getOrder } from '../store/actions/orderActions'
import { loadItems } from '../store/actions/itemActions'
import { ItemPreview } from '../cmps/ItemPreview'
import CircularProgress from '@material-ui/core/CircularProgress'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
        var items = this.props.items.filter((item, i) => {
            return item.tags.some(tag => {
                return tag === newOrder.tag
            })


        })
        items = items.slice(0, 4)
        console.log(404, items);
        this.setState({ items: items })

    }

    // doSetState = (newOrder) => {
    //     t, () => {
    //     }, console.log('order', this.state.order))


    render() {
        const { order, items } = this.state
        if (!items.length) return (
            <div className="center">
                <CircularProgress />
            </div>
        )

        return (
            <section className="thank-you">
                <div className="thank-msg">
                    <div className="order-msg">Your {order.amount !== 1 && order.amount} {order.amount === 1 ? "pair" : "pairs"} of "{order.title}" Socks Is On The Way</div>
                    <Link className="continue-shopping" to={'/shop'}>Find another one...{/*<ArrowForwardIcon />*/}</Link>
                </div>

                {/* <div className="speech half">thank you for you purchase</div> */}
                <img src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611587744/Funny-Royal-Socks-Gift-Collection-Kate_480x-removebg-preview_a2fseb.png" alt="img" />


                {/* ************* Item With Same Tag Preview  ********************* */}

                <div className="item-thank">
                    <h3 className="item-thank-header">More socks for you</h3>
                    <div className="item-thank-conainer">

                        {items.map(item => {
                            return <ItemPreview key={item._id} item={item} /*removeable={false}*/ />
                        })}
                    </div>
                </div>
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
