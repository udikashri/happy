import React, { Component } from 'react'
import heppyHome from "../assets/img/Home/pexels-photo-1684187.jpeg"
export class Home extends Component {
  state = {}
  render() {
    console.log('🧦Happy Faces ');
    return (
      <>
        <section className="hero-image">
          {/* <img src={heppyHome} /> */}
          <h1>hello Faces :)</h1>
        </section>
        <section className="app main-container">
          <div className=".home full main-container">


            <section className="home-cards-list">
              <div class="home-card">
                <div class="preview-image img-1">
                  <h3>Fun</h3>
                  <h4>cuisine</h4>
                </div>
              </div>
              <div class="home-card">
                <div class="preview-image img-2">
                  <h3>Best Seller</h3>
                  <h4>Socks</h4>
                </div>
              </div>
              <div class="home-card">
                <div class="preview-image img-3">
                  <h3>Fun</h3>
                  <h4>and amusing</h4>
                </div>
              </div>
              <div class="home-card">
                <div class="preview-image img-4">
                  <h3>Stuff</h3>
                  <h4>better stuff</h4>
                </div>
              </div>
              <div class="home-card">
                <div class="preview-image img-4">
                  <h3>other things</h3>
                  <h4>get out of here</h4>
                </div>
              </div>
            </section>
          </div>
        </section>
      </>
    )
  }
}
