import { ItemPreview } from './ItemPreview'

export function ItemList({ items}) {
    return <article className="card-grid">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} />
        })}
        </article>
}

