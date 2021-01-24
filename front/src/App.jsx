import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'

// import { LoginSignup } from './pages/LoginSignup'
// import { Chat } from './pages/Chat'
// import { UserDetails } from './pages/UserDetails'
import { BackOfficeSeller} from './pages/BackOfficeSeller'
import { ShopApp } from './pages/ShopApp'
import { ItemDetails } from './pages/ItemDetails'
import '../src/assets/styles/main.scss'
import {loadItems} from './store/actions/itemActions'
import {loadSellers} from './store/actions/sellerActions'

import { Header } from './cmps/Header'
import { Footer } from './cmps/footer'
import { LoginSignup } from './pages/LoginSignup'
import { UserDetails } from './pages/UserDetails'
import { connect } from 'react-redux'
import {ThankYou} from './pages/ThankYou'
import {Dashboard} from './pages/Dashboard'

export class _App extends Component {


  

  render() {



    return (
      <div className="app">
        <Router>
          <main>
            <Header></Header>
            <Switch>
              <Route path="/user/:id" component={UserDetails} />
              <Route path="/login" component={LoginSignup} />
              <Route path="/thank" component={ThankYou} />
              <Route path="/dashboard" component={Dashboard} />
              {/* <Route path="/chat" component={Chat} /> */}
              <Route path="/seller/:userId" component={BackOfficeSeller} />
              <Route path="/item/:itemId" component={ItemDetails} />
              <Route path="/shop" component={ShopApp} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
     
  }
}

const mapDispatchToProps = {
  loadItems,
  loadSellers

}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
