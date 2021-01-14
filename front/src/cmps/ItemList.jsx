// import { _ItemPreview } from "./ItemPreview.jsx"
import { ItemPreview } from './ItemPreview'
// import {itemService} from '../services/itemService.js'

// console.log(itemService.query())

export function ItemList({ items}) {
    return <article className="item-list">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} />
        })}
        </article>
}

