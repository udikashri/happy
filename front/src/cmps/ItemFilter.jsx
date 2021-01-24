import React, { Component } from 'react'
import { PickColor } from './PickColor'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'all',
            color: 'clear',
            tags: [],
            userId: 'clear'
            // lowPrice: 0,
            // highPrice: 1000

        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        // console.log(target.value);
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
        // const params = new URLSearchParams()
        // if (this.state.title) {
        //   params.append("title", this.state.title)
        //  else {
        //   params.delete("tags")
        // }
    }

    handleChangeColor = (color) => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, color: color } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }
    handleChangeUser = ({ target }) => {
        console.log(target);
        console.log(target.alt);
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, userId: target.alt } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    render() {
        const { filterBy } = this.state
        const { sellers } = this.props
        console.log(sellers);
        return (
            <section className="item-filter" >
                {/* <h1></h1> */}
                <h6 className="h6-filter-title">Find socks</h6>
                <div className="filter-input-container">
                    <input type="text" name="title" value={filterBy.title} onChange={this.handleChange} placeholder="Search e.g 'React socks'" autoComplete="off" />
                    {/* <input type="text" name="tags" value={filterBy.title} onChange={this.handleChange} placeholder="Search e.g 'React socks'" autoComplete="off" /> */}
                    <h6>Color:</h6>
                    <PickColor handleChangeColor={this.handleChangeColor} />
                    <h6>Price:</h6>
                    <input className="filter-price" type="number" name="lowPrice"  /*value={filterBy.lowPrice}*/ onChange={this.handleChange} placeholder="Min price" /*name="highPrice"*/ />
                    <span> - </span>
                    <input className="filter-price" type="number" name="highPrice" /*value={filterBy.highPrice}*/ onChange={this.handleChange} placeholder="Max price" />
                    <h6>Tags:</h6>
                    <section className="filter-tags flex">
                        <Link to="/shop?tag=featured">Featured</Link>
                        <Link to="/shop?tag=developers">Developers</Link>
                        <Link to="/shop?tag=art">Art</Link>
                        <Link to="/shop?tag=trending">Trending</Link>
                        <Link to="/shop?tag=onsale">OnSale</Link>
                        <Link to="/shop?tag=display">Hot</Link>
                    </section>
                    <h6 className="h6-filter-seller">Top sellers</h6>
                    {sellers && <section>
                        {sellers.map(seller => {
                            console.log(seller.name);
                            return <img key={seller.user._id} value={seller.user.fullname} src={seller.user.imgUrl} alt={seller.user._id} className="img-user-filter" onClick={this.handleChangeUser} />

                        })}
                    </section>}
                </div>
            </section>
        )
    }

}
