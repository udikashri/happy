import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class _ItemFilter extends Component {
//     state = {
//         filterBy: {
//             color: '',
//             tags: '',
//             lowPrice: -Infinity,
//             highPrice: Infinity,
//             title: ''
//         }
//     }
//     render() {
//         return (
//             <section className="item-filter">
//                 <h1>item filter : hello word!!</h1>
//             </section>
//         )
//     }
// }


// const mapStateToProps = state => {
//     return {
//         // loggedInUser: state.userModule.loggedInUser
//     }
// }
// const mapDispatchToProps = {}


// export const ItemFilter = connect(mapStateToProps, mapDispatchToProps)(_ItemFilter)


export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            type: '',
            lowPrice: -Infinity,
            highPrice: Infinity
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number')? +target.value : target.value

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
                <input type="number" name="highPrice" value={filterBy.highPrice} onChange={this.handleChange} placeholder="high price" /> */}
                {/* <InputLabel id="demo-simple-select-label">Item Type</InputLabel> */}
                {/* <select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={filterBy.type}
                    onChange={this.handleChange}
                >
                    <option selected value="">All</option>
                    <option value="Family">Family</option>
                    <option value="Educational">Educational</option>
                    <option value="Funny">Funny</option>
                    <option value="Adult">Adult</option>
                </select> */}
            </section>
        )
    }

}
