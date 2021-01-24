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
                <section title="Red" onClick={() => {
                    this.props.handleChangeColor('red')
                    this.handlePickeColor('red')
                }} className={(pickeColor === "red" || pickeColor === "all") ? "red-fill" : "red-border"} >
                </section>
                <section title="Gray" onClick={() => {
                    this.props.handleChangeColor('gray')
                    this.handlePickeColor('gray')
                }} className={(pickeColor === "gray" || pickeColor === "all") ? "gray-fill" : "gray-border"} ></section>
                <section title="Blue" onClick={() => {
                    this.props.handleChangeColor('blue')
                    this.handlePickeColor('blue')

                }} className={(pickeColor === "blue" || pickeColor === "all") ? "blue-fill" : "blue-border"} ></section>
                <section title="Pink" onClick={() => {
                    this.props.handleChangeColor('pink')
                    this.handlePickeColor('pink')

                }} className={(pickeColor === "pink" || pickeColor === "all") ? "pink-fill" : "pink-border"} ></section>
                <section title="Yellow" onClick={() => {
                    this.handlePickeColor('yellow')
                    this.props.handleChangeColor('yellow')
                }} className={(pickeColor === "yellow" || pickeColor === "all") ? "yellow-fill" : "yellow-border"} ></section>
                <section title="White" onClick={() => {
                    this.props.handleChangeColor('white')
                    this.handlePickeColor('white')

                }} className={(pickeColor === "white" || pickeColor === "all") ? "white-fill" : "white-border"} ></section>
                <section title="Black" onClick={() => {
                    this.handlePickeColor('black')
                    this.props.handleChangeColor('black')
                }} className={(pickeColor === "black" || pickeColor === "all") ? "black-fill" : "black-border"} ></section>
                <section title="Green" onClick={() => {
                    this.handlePickeColor('green')
                    this.props.handleChangeColor('green')
                }} className={(pickeColor === "green" || pickeColor === "all") ? "green-fill" : "green-border"} ></section>
                <section title="Purple" onClick={() => {
                    this.handlePickeColor('purple')
                    this.props.handleChangeColor('purple')
                }} className={(pickeColor === "purple" || pickeColor === "all") ? "purple-fill" : "purple-border"} ></section>
                <section title="Brown" onClick={() => {
                    this.handlePickeColor('brown')
                    this.props.handleChangeColor('brown')
                }} className={(pickeColor === "brown" || pickeColor === "all") ? "brown-fill" : "brown-border"} ></section>
                <section title="colorful" onClick={() => { 
                    this.handlePickeColor('colorful')
                    this.props.handleChangeColor('colorful') 
                    }} className={(pickeColor === "colorful" || pickeColor === "all") ? "colorful-fill" : "colorful-border"}></section>
                <section title="Clear" onClick={() => {
                    this.handlePickeColor('all')
                    this.props.handleChangeColor('clear')
                }} className="all"><NotInterestedIcon /></section>
            </div>
        )
    }
}
