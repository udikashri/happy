import React, { Component } from 'react'


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'All',
            // price: '',
        }
    }


    handleChange = ({ target }) => {
        console.log(target);
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value

        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    render() {
        const { filterBy } = this.state
        return (
            <section className="item-filter">
                <input type="text" name="title" value={filterBy.title} onChange={this.handleChange} placeholder="Filter" />
                {/* <input type="number" name="lowPrice" value={filterBy.lowPrice} onChange={this.handleChange} placeholder="low price" />
                <input type="number" name="highPrice" value={filterBy.highPrice} onChange={this.handleChange} placeholder="high price" />
                <input id="demo-simple-select-label">Item Type</input> */}
                <select
                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={filterBy.type}
                    onChange={this.handleChange}
                >
                    <option value="All">All</option>
                    <option value="socks">Socks</option>
                    <option value="masks">Masks</option>
                </select>
                <div className="color-container">

                    <section className="red"></section>
                    <section className="gray"></section>
                    <section className="blue"></section>
                    <section className="pink"></section>
                    <section className="yellow"></section>
                    <section className="black"></section>
                    <section className="white"></section>
                    <section className="green"></section>


                </div>
            </section>
        )
    }

}
