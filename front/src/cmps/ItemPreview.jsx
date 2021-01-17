import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export function ItemPreview(props) {
    const { item } = props;
    //     return <section className="card-hadar">
    //         <p>{item.title}</p>
    //         <h5>Price : {item.price} </h5> 
    //         <img src={item.imgUrl} alt="" />
    //         <button><Link to={`/item/${item._id}`}>Details</Link></button>
    //     </section>
    // }
    return <section className="card-main">
        <Card>
            <CardMedia
                className="card-media"
                image={item.imgUrl}
                title={item.title}
            />
   
            <CardHeader
        avatar={
            <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" className="small" />

        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shira Socks"
        subheader="Best Seller ⭐ 4.2"/>
        
      <CardContent className="card-text">
          <Typography subtitle1>{item.title}</Typography>
            </CardContent>
            <button className="card-edit"><Link to={`/item/${item._id}`}>Details</Link></button>
        </Card>
    </section>
}
