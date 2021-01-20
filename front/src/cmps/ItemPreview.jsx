import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

export function ItemPreview({item , removeable}) {
    
  return <section className="card-main">
    {removeable && <button>DELETE!</button>}
    <Card>
      <Link to={`/item/${item._id}`}>

        {/* <CardMedia
          className="card-media"
          image={item.imgUrl}
          title={item.title}


        /> */}
        <img className="item-img" src={item.imgUrl} alt="" />


        {/* // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shira Socks"
        subheader="Best Seller ⭐ 4.2"/>  */}

        {/* <CardContent className="card-text">
          <Typography >  </Typography> </CardContent> */}
        <div className="item-card-preview" >
          <div>{item.title}</div>
          <h5 className="price">${item.price}</h5>

        </div>
      </Link>
      <div className="seller-preview">
        <img alt="Shira" src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" />
        <div>Shira Socks
        ⭐ 4.2
        </div>
      </div>
    </Card>

  </section>
}
