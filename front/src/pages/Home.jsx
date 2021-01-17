import React, { Component } from 'react'
import heppyHome from "../assets/img/Home/heppy-home.jpeg"
export  class Home extends Component {
  state={}
  render() {
console.log('🧦Happy Faces ');
    return (
      <div className="home-page">
        <h1>Happy Faces :)</h1>
        <img src={heppyHome}/>
      </div>
    )
  }
}
