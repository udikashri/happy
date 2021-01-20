import { Link } from "react-router-dom";

export function ThankYou(props) {
    const { item } = props;
    return <section className="thank-you">
    <div className="thank-msg">
        <div>the socks is on the way</div>
        <Link to={'/shop'}>continue shoping</Link>
    </div>

    <div class="speech half">thank you Yaron</div>
        <img src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611052878/atmosphere/3485-removebg-preview_1_gy43es.png" />
    </section>
}


