import React, { Component } from 'react'


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'socks',
            // price: '',
        }
    }


    handleChange = ({ target }) => {
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
            {/* <select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={filterBy.type}
                    onChange={this.handleChange}
                >
                    <option selected value="">All</option>
                    <option value="socks">Socks</option>
                    <option value="masks">Masks</option>
                </select> */}
            </section>
        )
    }

}
