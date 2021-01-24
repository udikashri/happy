import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { ItemEdit } from '../cmps/ItemEdit';
import { ItemFilter } from '../cmps/ItemFilter';
import { ItemList } from '../cmps/ItemList';
import { loadItems, setFilter, saveItem} from '../store/actions/itemActions'
import { loadSellers } from '../store/actions/sellerActions'
import CircularProgress from '@material-ui/core/CircularProgress'



class _ShopApp extends Component {

state = {
    sellers:null
}

    async componentDidMount() {
        const queryString = this.props.location.search;
        // console.log('q', queryString);
        const urlParams = new URLSearchParams(queryString);
        const tag = urlParams.get('tag')
        console.log('tag', tag);
        if (tag) {
            const filterBy = {tags:[tag]}
            this.props.loadItems(filterBy)
        } else {
            this.props.loadItems()
        }
        await this.props.loadSellers()
        this.loadSeller()
        
        // await console.log(sellers);
        // // this.loadSeller()
        // 
        // console.log('Got from store:', this.props)
    }
    
    async componentDidUpdate(prevState) {
        // const sellers = await this.props.loadSellers()
        // if (sellers !== this.state.sellers) {
        // //   const { currItem } = this.props
        // await console.log(sellers);
        //   // console.log(await currItem);
        // //   this.setState({ currItem })
        // }
      }

    // componentDidUpdate() {

    //     // history.push({search: params.toString()})
    // }

    loadSeller = async () => {
        // const sellerId = this.state.currItem.seller._id
        // this.props.loadSellers()
         const sellers = await this.props.sellers
         console.log(sellers)
         this.setState({ sellers})
        // const seller = sellers.find(seller => {
        //   return seller._id === sellerId
        // })
        // ,
        //      () => {
        // //   this.rateCalculator(seller.reviews)
        // })
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
        const {sellers} = this.state
        console.log(sellers);
        if (!items || !sellers ) return (
            <div className="center">
            <CircularProgress />
          </div>
        )
        return (
            <section className="shop-container">
                {sellers && <ItemFilter sellers={sellers} onSetFilter={this.onSetFilter} loadItems={this.props.loadItems} location={this.props.location} />}
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
        sellers: state.sellerModule.sellers
    }
}

const mapDispatchToProps = {
    loadItems,
    setFilter,
    saveItem,
    loadSellers
}

export const ShopApp = connect(mapStateToProps, mapDispatchToProps)(_ShopApp);