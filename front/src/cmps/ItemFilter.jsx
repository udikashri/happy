import React, { Component } from 'react'
import { PickColor } from './PickColor'

export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'all',
            color: 'clear',
            tags: []
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

    render() {
        const { filterBy } = this.state
        return (
            <section className="item-filter" >
                <h1>Find socks</h1>
                <h6>Search</h6>

                <div className="filter-input-container">
                    <input type="text" name="title" value={filterBy.title} onChange={this.handleChange} placeholder="Search e.g 'React socks'" autoComplete="off" />
                    {/* <input type="text" name="tags" value={filterBy.title} onChange={this.handleChange} placeholder="Search e.g 'React socks'" autoComplete="off" /> */}
                    <h6>Up to price:</h6>
                    <input type="number" name="lowPrice"  /*value={filterBy.lowPrice}*/ onChange={this.handleChange} placeholder="Up to $" /*name="highPrice"*/ />
                    <input type="number" name="highPrice" /*value={filterBy.highPrice}*/ onChange={this.handleChange} placeholder="Max" />
                    <h6>Filter by color:</h6>
                    <PickColor handleChangeColor={this.handleChangeColor} />

                </div>
            </section>
        )
    }

}
