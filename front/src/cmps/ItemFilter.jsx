import React, { Component } from 'react'
import { PickColor } from './PickColor'

export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'all',
            color: 'clear',
            // lowPrice: 0,
            // highPrice: 1000

        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        console.log(target.value);
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    handleChangeColor = (color) => {
        console.log(color);
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

                <div className="flex-column">
                    <input type="text" name="title" value={filterBy.title} onChange={this.handleChange} placeholder="Search e.g 'React socks'" autoComplete="off" />
                    <h6>Up to price:</h6>
                    <input type="number" name="highPrice"  /*value={filterBy.lowPrice}*/ onChange={this.handleChange} placeholder="Up to $" name="highPrice" />
                    {/* <input type="number" name="highPrice" value={filterBy.highPrice} onChange={this.handleChange} placeholder="Max" /> */}
                    <h6>Filter by color:</h6>
                    <PickColor handleChangeColor={this.handleChangeColor} />

                </div>
            </section>
        )
    }

}
