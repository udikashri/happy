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
    console.log('🧦Happy Faces ');
    return (
      <>
        <section className="hero-image">
          <h2>good things come in pairs...</h2>
          <h1>Find your match</h1>
         <Link className="btn" to={`/shop`}>🧦 I feel lucky</Link>
        </section>
        <section className="app main-container">
          <div className="home">
          <h2>🧵 Most popular socks</h2>

          <section className="item-cards flex">
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
        subheader="Best Seller ⭐ 4.2"/>
       
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
        subheader="Top Seller ⭐⭐⭐"/>
        
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
        subheader="Funny Seller ⭐ 4.2"/>
        
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
        subheader="Featurd Seller 🧵"/>
        
      <CardContent className="card-text">
            </CardContent>
        </Card>
          </section>

            <section className="home-collection-list">
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
          </div>
          <h1>Things to buy</h1>
          <section className="item-cards flex">
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
        subheader="Best Seller ⭐ 4.2"/>
       
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
        subheader="Top Seller ⭐⭐⭐"/>
        
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
        subheader="Funny Seller ⭐ 4.2"/>
        
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
        subheader="Featurd Seller 🧵"/>
        
      <CardContent className="card-text">
            </CardContent>
        </Card>
          </section>






        </section>
      </>
    )
  }
}
