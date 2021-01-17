import React, { Component } from 'react'


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
<<<<<<< HEAD
            type: 'all',
=======
            type: 'All',
            color:''
>>>>>>> 1559208ae6d9c000508fddae2b875bd4680bf2c6
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

    handleChangeColor =(color) =>{
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, color: color } }), () => {
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
                    <option value="all">All</option>
                    <option value="socks">Socks</option>
                    <option value="masks">Masks</option>
                </select>
                <div className="color-container">

                    <section onClick={() => {this.handleChangeColor('red')}} className="red"></section>
                    <section onClick={() => {this.handleChangeColor('gray')}} className="gray"></section>
                    <section onClick={() => {this.handleChangeColor('blue')}} className="blue"></section>
                    <section onClick={() => {this.handleChangeColor('pink')}} className="pink"></section>
                    <section onClick={() => {this.handleChangeColor('yellow')}} className="yellow"></section>
                    <section onClick={() => {this.handleChangeColor('black')}} className="black"></section>
                    <section onClick={() => {this.handleChangeColor('white')}} className="white"></section>
                    <section onClick={() => {this.handleChangeColor('green')}} className="green"></section>
                    <section onClick={() => {this.handleChangeColor('purple')}} className="purple"></section>
                    <section onClick={() => {this.handleChangeColor('brown')}} className="brown"></section>


                </div>
            </section>
        )
    }

}
