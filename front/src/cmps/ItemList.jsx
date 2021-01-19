import { ItemPreview } from './ItemPreview'

export function ItemList({ items}) {
    console.log(33, items);
    return <article className="card-grid">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} removeable={false}/>
        })}
        </article>
}

