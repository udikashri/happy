import React, { Component } from 'react'


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: 'all',
            color:''
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

                
                    <section title="Red" onClick={() => {this.handleChangeColor('red')}} className="red"></section>
                    <section title="Gray" onClick={() => {this.handleChangeColor('gray')}} className="gray"></section>
                    <section title="Blue" onClick={() => {this.handleChangeColor('blue')}} className="blue"></section>
                    <section title="Pink" onClick={() => {this.handleChangeColor('pink')}} className="pink"></section>
                    <section title="Yellow" onClick={() => {this.handleChangeColor('yellow')}} className="yellow"></section>
                    <section title="White" onClick={() => {this.handleChangeColor('white')}} className="white"></section>
                    <section title="Black" onClick={() => {this.handleChangeColor('black')}} className="black"></section>
                    <section title="Green" onClick={() => {this.handleChangeColor('green')}} className="green"></section>
                    <section title="Purple" onClick={() => {this.handleChangeColor('purple')}} className="purple"></section>
                    <section title="Brown" onClick={() => {this.handleChangeColor('brown')}} className="brown"></section>
                    <section title="Clear" onClick={() => {this.handleChangeColor('clear')}} className="clear">🚫</section>


                </div>
            </section>
        )
    }

}
