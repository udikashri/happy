import React, { Component } from 'react'

import NotInterestedIcon from '@material-ui/icons/NotInterested';


export class PickColor extends Component {
    state = {
        pickeColor: null
    }

    handlePickeColor = (color) => {
        this.setState({pickeColor:c})
    }


    render() {
        const {pickeColor} = this.state
        return (
            <div className="color-container">
                <section title="Red" onClick={() => {
                        this.props.handleChangeColor('red')
                        // this.handlePickeColor('red')
                }} className="red-fill"></section>
                <section title="Gray" onClick={() => { this.props.handleChangeColor('gray') }} className="gray-fill"></section>
                <section title="Blue" onClick={() => { this.props.handleChangeColor('blue') }} className="blue-fill"></section>
                <section title="Pink" onClick={() => { this.props.handleChangeColor('pink') }} className="pink-fill"></section>
                <section title="Yellow" onClick={() => { this.props.handleChangeColor('yellow') }} className="yellow-fill"></section>
                <section title="White" onClick={() => { this.props.handleChangeColor('white') }} className="white-fill"></section>
                <section title="Black" onClick={() => { this.props.handleChangeColor('black') }} className="black-fill"></section>
                <section title="Green" onClick={() => { this.props.handleChangeColor('green') }} className="green-fill"></section>
                <section title="Purple" onClick={() => { this.props.handleChangeColor('purple') }} className="purple-fill"></section>
                <section title="Brown" onClick={() => { this.props.handleChangeColor('brown') }} className="brown-fill"></section>
                <section title="colorful" onClick={() => { this.props.handleChangeColor('colorful') }} className="colorful"></section>
                <section title="Clear" onClick={() => { this.props.handleChangeColor('clear') }} className="all"><NotInterestedIcon /></section>
            </div>
        )
    }
}
