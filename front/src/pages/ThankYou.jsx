import { Component } from "react";
import { Link } from "react-router-dom";
import { eventBusService } from '../services/eventBusService'



export class ThankYou extends Component {
    state = {
        order: {
            amount: 2,
            title: 'Busy Making a Fucking Difference Socks'
        }
    }

    componentDidMount() {
        eventBusService.on('order', (msgOrder) => {
            console.log(msgOrder);
            const {order} = this.state
            // newOrder = {
            //     amount: msgOrder.amount,
            //     title: msgOrder.title
            // }
            order.amount = msgOrder.amount
            console.log(order);
            this.setState({ order })
        })
    }
    componentWillUnmount(){
        eventBusService.off()
}
    // doSetState = (newOrder) => {
    //     t, () => {
    //     }, console.log('order', this.state.order))

    // }

    render() {
        const { order } = this.state
        console.log(order);
        return (
            <section className="thank-you">
                ,              <div className="thank-msg">
                    <div>Your Socks Is On The Way</div>
                    <Link to={'/shop'}>continue shoping</Link>
                </div>

                <div className="speech half">thank you for you purchase</div>
                <img src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611052878/atmosphere/3485-removebg-preview_1_gy43es.png" alt="img" />
            </section>)
    }
}


