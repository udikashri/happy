import { ItemPreview } from './ItemPreview'

export function ItemList({ items}) {
   
    return <article className="item-list">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} /*removeable={false}*/ />
        })}
        </article>
}

