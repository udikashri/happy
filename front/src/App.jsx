import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
// import { LoginSignup } from './pages/LoginSignup'
// import { Chat } from './pages/Chat'
// import { UserDetails } from './pages/UserDetails'
import { ShopApp } from './pages/ShopApp'
import { ItemDetails } from './pages/ItemDetails'
import '../src/assets/styles/main.scss'

import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app main-container">
      <Router>
        <Header></Header>
        <main>
          <Switch>
            {/* <Route path="/user/:id" component={UserDetails} /> */}
            {/* <Route path="/login" component={LoginSignup} /> */}
            {/* <Route path="/chat" component={Chat} /> */}
            <Route path="/item/:itemId" component={ItemDetails} />
            <Route path="/shop" component={ShopApp} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          Starter
        </footer>
      </Router>
    </div>
  )
}

