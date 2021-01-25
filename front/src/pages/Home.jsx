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
import { loadItems, setFilter } from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
import { connect } from 'react-redux'


class _Home extends Component {
  state = {}

  componentDidMount() {
    this.props.loadItems()
    this.props.loadSellers()
  }


  render() {
    console.log('🧦HappySocks');
    return (
      <>
        <section className="hero-image">
          <h2>Good things come in pairs...</h2>
          <div className="flex">
            <Link className="btn" to={`/shop`}>🧦 Find your match</Link>
            <Link className="btn btn-2" to={`/item/600ab40822fe2c973b33a4cc`}>🎲 I'm feeling lucky</Link>
          </div>
        </section>
        <section>
          <div className="home main-container">
            {/* <h2>🧵 Our FullStack</h2> */}
            <section className="item-cards full flex">
              <Card>
                <Link to={`/item/600ab40822fe2c973b33a4d7`}>
                  <CardMedia
                    className="card-media"
                    image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611584503/RsBR5qPA9m_ncoolg.png"
                    title="great stuff"
                  />

                  <CardHeader
                    avatar={
                      <Avatar src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" className="small" />

                    }
                    title="Shira Socks"
                    subheader="Best Seller ⭐ 4.2" />
                </Link>
              </Card>
              <Card>
                <Link to={`/item/600ab40922fe2c973b33a528`}>

                  <CardMedia
                    className="card-media"
                    image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611581605/tlc0k3deyfydeqddr5a0.jpg"
                    title="great stuff"
                  />

                  <CardHeader
                    avatar={
                      <Avatar src="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg" className="small" />

                    }
                    title="Joe stuff"
                    subheader="Top Seller ⭐⭐⭐" />


                  {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions> */}
                </Link>

              </Card>
              <Card>
                <Link to={`/item/600ab40822fe2c973b33a4f1`}>

                  <CardMedia
                    className="card-media"
                    image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611582002/gptz9uhfz6fzun5e6tq4.jpg"
                    title="great stuff"
                  />

                  <CardHeader
                    avatar={
                      <Avatar alt="bob" src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg" className="small" />

                    }
                    title="Bob Masks"
                    subheader="Funny Seller ⭐ 4.2" />

                </Link>

              </Card>
              <Card>
                <Link to={`/item/600ab40a22fe2c973b33a5e3`}>

                  <CardMedia
                    className="card-media"
                    image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611590031/df4236ca2499be75.jpg_xagd0d.jpg"
                    title="great stuff"
                  />

                  <CardHeader
                    avatar={
                      <Avatar src="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg" className="small" />

                    }
                    title="Miryam lib"
                    subheader="Featurd Seller 🧵" />

                </Link>

              </Card>
            </section>

            {/* <section className="home-collection-list ">
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
            </section> */}


    

            {/* *************************** Top Seller ************************************* */}
            <section className="top-sellers">
              <section className="sellers-list flex-column align-center justify-center" >
                <h2>Our Top Sellers </h2>
                <div className="sellers-row flex  space-between justify-center">
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/10_vnikfz.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/8_tzi2ty.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/5_yvygo4.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/18_rwb9g1.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/16_trr5zq.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/9_gqkjqu.jpg" alt="" />
                </div>
                <div className="sellers-row flex space-between justify-center">
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/19_ne4lby.jpg" alt="hadar" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/7_gdn9xw.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/3_nz6vkf.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/4_o2r8cs.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/30_nvklsm.jpg" alt="" />
                  <img className="top-seller" src="https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/27_zdptgs.jpg" alt="" />


                </div>
                <Link className="btn" to={`/sell`}>Join our Marketplace</Link>
              </section>
              <section className="seller-banner">
                <div className="banner-text">HappySocks changed my life!</div>
                <div className="banner-text2">Bob Safam - Maatziv Garbaim</div>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />

              </section>
            </section>


           <div className="hacker full"> <h2> 👩‍💻 Hacker's Socks </h2></div>
            <section className="item-cards full flex">
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.979819935.9882/ur,socks_size_comparison_medium,tall_portrait,750x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar src="https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg" className="small" />

                  }
                  title="Shira Socks"
                  subheader="Best Seller ⭐ 4.2" />


              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611428206/hf/items/ur_socks_flatlay_medium_square_1000x1000-bg_f8f8f8.1_1_pltfyu.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar src="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg" className="small" />

                  }
                  title="Joe stuff"
                  subheader="Top Seller ⭐⭐⭐" />


                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton> */}
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://res.cloudinary.com/dt1zahrqy/image/upload/v1611428175/hf/items/ur_socks_size_comparison_medium_tall_portrait_750x1000-bg_f8f8f8.1_gkmznv.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar alt="bob" src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg" className="small" />

                  }
                  title="Bob Masks"
                  subheader="Funny Seller ⭐ 4.2" />


              </Card>
              <Card>
                <CardMedia
                  className="card-media"
                  image="https://ih1.redbubble.net/image.930826198.5204/ur,socks_flatlay_medium,square,1000x1000-bg,f8f8f8.1.jpg"
                  title="great stuff"
                />

                <CardHeader
                  avatar={
                    <Avatar src="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg" className="small" />

                  }
                  title="Miryam lib"
                  subheader="Featurd Seller 🧵" />


              </Card>
            </section>
          </div>





        </section >
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemModule.items,
    sellers: state.sellerModule.sellers,
    filterBy: state.itemModule.filterBy,
  }
}

const mapDispatchToProps = {
  loadItems,
  loadSellers,
  setFilter,


}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);