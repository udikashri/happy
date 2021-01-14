import React, { Component } from 'react'
import { connect } from 'react-redux'

class _ItemFilter extends Component {
    state = {
        filterBy: {
            color: '',
            tags: '',
            lowPrice: -Infinity,
            highPrice: Infinity,
            title: ''
        }
    }
    render() {
        return (
            <section className="item-filter">
                <h1>item filter : hello word!!</h1>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        // loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const ItemFilter = connect(mapStateToProps, mapDispatchToProps)(_ItemFilter)