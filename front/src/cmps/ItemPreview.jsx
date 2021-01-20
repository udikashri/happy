import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../store/actions/itemActions'

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

// export function ItemPreview({ item, removeable }) {

export class _ItemPreview extends Component {


  onRemove = async (itemId) => {
    // await 
    this.props.removeItem(itemId)
    // this.props.history.push('/shop')
  }


  render() {
    const { item , removeable } = this.props
    return <section className="card-main">
      {/* {removeable && <button>DELETE!</button>} */}
      <Card>
        <Link to={`/item/${item._id}`}>
          <img className="item-img" src={item.imgUrl} alt="" />
          <div className="item-card-preview" >
            <div className="title">{item.title}</div>
            <h5 className="price">${item.price}</h5>
            {removeable && <button onClick={(event) => this.onRemove(event,item._id)} className="delete-btn">Delete</button>}
          </div>
        </Link>
        <div className="seller-preview">
          <img src={item.seller.imgUrl} />
          <div >{item.seller.fullname}
        ⭐ 4.2
        </div>
        </div>
      </Card>

    </section>
  }
}

const mapStateToProps = state => {
  return {

      // loggedInUser: state.userModule.loggedInUser,
      // items: state.itemModule.items
  }
}

const mapDispatchToProps = {
  removeItem

}

export const ItemPreview = connect(mapStateToProps, mapDispatchToProps)(_ItemPreview);
