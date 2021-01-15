import { Link } from 'react-router-dom'

export function ItemPreview(props){
    const {item} = props;
    return <section className="card-hadar">
        <p>{item.title}</p>
        <img src={item.imgUrl} alt=""/>
        <button><Link to={`/item/${item._id}`}>Details</Link></button>
    </section>
}

