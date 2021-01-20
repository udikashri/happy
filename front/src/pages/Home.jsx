import React, { Component } from 'react'
import heppyHome from "../assets/img/Home/pexels-photo-1684187.jpeg"
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export class Home extends Component {
  state = {}
  render() {
    console.log('🧦HappySocks ');
    return (
      <>
        <section className="hero-image">
          <h2>good things come in pairs...</h2>
          <div className="flex">
          <Link className="btn" to={`/shop`}>🧦 Find your match</Link>
          <Link className="btn btn-2" to={`/shop`}>🎲 I feel lucky</Link>
          </div>
        </section>
        <section className="app">
          <div className="home main-container">
            <h2>🧵 Our FullStack</h2>
            <section className="item-cards full flex">
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://cdn.shopify.com/s/files/1/0271/0270/7784/products/Visual_Merch_village_Self-Portrait-V-Gogh_01_1600x.png?v=1605117057"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" className="small" />

                  }
                  title="Shira Socks"
                  subheader="Best Seller ⭐ 4.2" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://cdn.shopify.com/s/files/1/0271/0270/7784/products/1080x1080_Carrousel_Mondrian_1_1600x.jpg?v=1601317722"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg" className="small" />

                  }
                  title="Joe stuff"
                  subheader="Top Seller ⭐⭐⭐" />

                <CardContent className="card-text">
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://cdn.shopify.com/s/files/1/0271/0270/7784/products/1080x1080_Carrousel_Gauguin_1_400x.jpg?v=1601317794"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="bob" src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg" className="small" />

                  }
                  title="Bob Masks"
                  subheader="Funny Seller ⭐ 4.2" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://cdn.shopify.com/s/files/1/0271/0270/7784/products/Visual_Merch_Great_Wave_01_1600x.jpg?v=1601317906"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg" className="small" />

                  }
                  title="Miryam lib"
                  subheader="Featurd Seller 🧵" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
            </section>

            <section className="home-collection-list full">
              <div className="collection-card img-1">
                <div className="preview-image ">
                  <h3>Fun</h3>
                  <h4>Masks</h4>
                </div>
              </div>
              <div className="collection-card">
                <div className="preview-image img-2">
                  <h3>Best Seller</h3>
                  <h4>Socks</h4>
                </div>
              </div>
              <div className="collection-card">
                <div className="preview-image img-3">
                  <h3>Fun</h3>
                  <h4>and amusing</h4>
                </div>
              </div>
              <div className="collection-card">
                <div className="preview-image img-4">
                  <h3>Stuff</h3>
                  <h4>better stuff</h4>
                </div>
              </div>
              <div className="collection-card">
                <div className="preview-image img-5">
                  <h3>other things</h3>
                  <h4>get out of here</h4>
                </div>
              </div>


            </section>
         
            <h2>Our Top Sellers </h2>

            <section className="sellers-list flex-column align-center justify-center" >
              <div className="sellers-row flex  space-between">
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/10_vnikfz.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/8_tzi2ty.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/11_egixh0.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/18_rwb9g1.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/6_qr24nq.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/18_rwb9g1.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/6_qr24nq.jpg" className="small" />
                </div>
               <div className="sellers-row flex space-between">
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/19_ne4lby.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/7_gdn9xw.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/3_nz6vkf.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/30_nvklsm.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/27_zdptgs.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/30_nvklsm.jpg" className="small" />
                <Avatar alt="Shira" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/27_zdptgs.jpg" className="small" />
                
             </div>
              <Link className="btn" to={`/sell`}>Join our Marketplace</Link>
            </section>
            <section className="seller-banner">
             <div className="banner-text">HappyFaces changed my life!</div> 
             <div className="banner-text2">Bob Safam - Maatziv Garbaim</div> 
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />
            </section>


            <h2> 👩‍💻 Hacker Socks </h2>
            <section className="item-cards full flex">
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.979819935.9882/ur,socks_size_comparison_medium,tall_portrait,750x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" className="small" />

                  }
                  title="Shira Socks"
                  subheader="Best Seller ⭐ 4.2" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.984109788.7935/ur,socks_flatlay_medium,square,1000x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg" className="small" />

                  }
                  title="Joe stuff"
                  subheader="Top Seller ⭐⭐⭐" />

                <CardContent className="card-text">
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.1888658350.5592/ur,socks_size_comparison_medium,tall_portrait,750x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="bob" src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg" className="small" />

                  }
                  title="Bob Masks"
                  subheader="Funny Seller ⭐ 4.2" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.930826198.5204/ur,socks_flatlay_medium,square,1000x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="Shira" src="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg" className="small" />

                  }
                  title="Miryam lib"
                  subheader="Featurd Seller 🧵" />

                <CardContent className="card-text">
                </CardContent>
              </Card>
            </section>
          </div>





        </section>
      </>
    )
  }
}
