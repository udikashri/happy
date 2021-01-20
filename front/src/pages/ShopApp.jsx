import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { ItemEdit } from '../cmps/ItemEdit';
import { ItemFilter } from '../cmps/ItemFilter';
import { ItemList } from '../cmps/ItemList';
import { loadItems, setFilter, saveItem } from '../store/actions/itemActions'

class _ShopApp extends Component {

    componentDidMount() {
        this.props.loadItems()
        // console.log('Got from store:', this.props)
    }

    onSetFilter = (filterBy) => {
        this.props.setFilter(filterBy)
        this.props.loadItems(filterBy)
    }

    // onSaveItem = (ev, newItem) => {
    //     ev.preventDefault()
    //     this.props.saveItem(newItem)
    //     this.setState({ currItem: newItem })
    // }

    render() {
        const { items } = this.props
        if (!items) return <h1>loading</h1>
        return (
            <section className="shop-container">
                <ItemFilter onSetFilter={this.onSetFilter} />
                {/* <ItemEdit onSaveItem={this.onSaveItem} /> */}
                <ItemList items={items} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {

        items: state.itemModule.items,
        filterBy: state.itemModule.filterBy,
    }
}

const mapDispatchToProps = {
    loadItems,
    setFilter,
    saveItem

}

export const ShopApp = connect(mapStateToProps, mapDispatchToProps)(_ShopApp);