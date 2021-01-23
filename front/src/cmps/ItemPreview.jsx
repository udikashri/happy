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

  state = {
    item: null,
    isLike: false
  }

  async componentDidMount() {
    this.setState({ item: this.props.item })
  }



  onRemove = async (ev, itemId) => {
    ev.stopPropagation()
    // await 
    this.props.removeItem(itemId)
    // this.props.history.push('/shop')
  }

  onLikes = () => {
    var copyItem = this.state.item
    var { isLike } = this.state
    if (isLike) copyItem.likes--
    else copyItem.likes++
    this.setState({ item: copyItem, isLike:!isLike })

    console.log('likes', this.state.item);
  }


  render() {
    const { removeable } = this.props
    var { item, isLike } = this.state
    if (!item) {
      console.log(555);
      item = this.props
    }
    return <section className="card-main">

      <Card>
        <Link to={`/item/${item._id}`}>
          <CardMedia
            className="card-media"
            image={item.imgUrl}
          // title={item.title}
          />

          {item.seller && <CardHeader
            avatar={
              <Avatar src={item.seller.imgUrl} className="small" />
            }
            title={item.title}
            subheader={item.seller.fullname} />}
        </Link>

        <CardContent className="card-text">
          {/* <span className="likes"></span> */}
          {/* <div className="price-likes"> */}
          <span onClick={this.onLikes} className="likes">{item.likes} {isLike?'❤️' :'🤍'}</span>
          <span className="price">${item.price}</span>
          {/* </div> */}
        </CardContent>
        {removeable && <button className="delete-button" onClick={(event) => this.props.onEdit(event, item._id)} className="delete-btn">Edit</button>}
        {removeable && <button className="delete-button" onClick={(event) => this.onRemove(event, item._id)} className="delete-btn">Delete</button>}
      </Card>



    </section>
  }
}

const mapStateToProps = state => {
  return {

    // loggedInUser: state.userModule.loggedInUser,
    items: state.itemModule.items
  }
}

const mapDispatchToProps = {
  removeItem

}

export const ItemPreview = connect(mapStateToProps, mapDispatchToProps)(_ItemPreview);
