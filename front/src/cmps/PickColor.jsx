import React, { Component } from 'react'

import NotInterestedIcon from '@material-ui/icons/NotInterested';


export class PickColor extends Component {
    state = {
        pickeColor: "all"
    }

    handlePickeColor = (color) => {
        this.setState({ pickeColor: color })
    }


    render() {
        const { pickeColor } = this.state
        return (
            <div className="color-container">
                <section title="Red" /*className="red-fill"*/ onClick={() => {
                    let toggleOutline = false
                    this.props.handleChangeColor('red')
                   
                    this.handlePickeColor('red')
                }} className={(pickeColor === "red") ? "red-fill outline": "red-fill"} >
                </section>
                <section title="Gray" onClick={() => {
                    this.props.handleChangeColor('gray')
                    this.handlePickeColor('gray')
                }} className={(pickeColor === "gray") ? "gray-fill outline" : "gray-fill"} ></section>
                <section title="Blue" onClick={() => {
                    this.props.handleChangeColor('blue')
                    this.handlePickeColor('blue')

                }} className={(pickeColor === "blue") ? "blue-fill outline" : "blue-fill"} ></section>
                <section title="Pink" onClick={() => {
                    this.props.handleChangeColor('pink')
                    this.handlePickeColor('pink')

                }} className={(pickeColor === "pink") ? "pink-fill outline" : "pink-fill"} ></section>
                <section title="Yellow" onClick={() => {
                    this.handlePickeColor('yellow')
                    this.props.handleChangeColor('yellow')
                }} className={(pickeColor === "yellow") ? "yellow-fill outline" : "yellow-fill"} ></section>
                <section title="White" onClick={() => {
                    this.props.handleChangeColor('white')
                    this.handlePickeColor('white')

                }} className={(pickeColor === "white") ? "white-fill outline" : "white-fill"} ></section>
                <section title="Black" onClick={() => {
                    this.handlePickeColor('black')
                    this.props.handleChangeColor('black')
                }} className={(pickeColor === "black") ? "black-fill outline" : "black-fill"} ></section>
                <section title="Green" onClick={() => {
                    this.handlePickeColor('green')
                    this.props.handleChangeColor('green')
                }} className={(pickeColor === "green") ? "green-fill outline" : "green-fill"} ></section>
                <section title="Purple" onClick={() => {
                    this.handlePickeColor('purple')
                    this.props.handleChangeColor('purple')
                }} className={(pickeColor === "purple") ? "purple-fill outline" : "purple-fill"} ></section>
                <section title="Brown" onClick={() => {
                    this.handlePickeColor('brown')
                    this.props.handleChangeColor('brown')
                }} className={(pickeColor === "brown") ? "brown-fill outline" : "brown-fill"} ></section>
                <section title="colorful" onClick={() => { 
                    this.handlePickeColor('colorful')
                    this.props.handleChangeColor('colorful') 
                    }} className={(pickeColor === "colorful") ? "colorful-fill outline" : "colorful-fill"}></section>
                <section title="Clear" onClick={() => {
                    this.handlePickeColor('all')
                    this.props.handleChangeColor('clear')
                }} className="all"><NotInterestedIcon /></section>
            </div>
        )
    }
}
