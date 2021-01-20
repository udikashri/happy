import React from 'react'
import NotInterestedIcon from '@material-ui/icons/NotInterested';

export  function PickColor({handleChangeColor}) {
    return (
        <div className="color-container">
                    <section title="Red" onClick={() =>  {handleChangeColor('red')}} className="red"></section>
                    <section title="Gray" onClick={() => {handleChangeColor('gray')}} className="gray"></section>
                    <section title="Blue" onClick={() => {handleChangeColor('blue')}} className="blue"></section>
                    <section title="Pink" onClick={() => {handleChangeColor('pink')}} className="pink"></section>
                    <section title="Yellow" onClick={() => {handleChangeColor('yellow')}} className="yellow"></section>
                    <section title="White" onClick={() => {handleChangeColor('white')}} className="white"></section>
                    <section title="Black" onClick={() => {handleChangeColor('black')}} className="black"></section>
                    <section title="Green" onClick={() => {handleChangeColor('green')}} className="green"></section>
                    <section title="Purple" onClick={() => {handleChangeColor('purple')}} className="purple"></section>
                    <section title="Brown" onClick={() => {handleChangeColor('brown')}} className="brown"></section>
                    <section title="colorful" onClick={() => {handleChangeColor('colorful')}} className="colorful"></section>
                    <section title="Clear" onClick={() => {handleChangeColor('clear')}} className="all"><NotInterestedIcon/></section>           
        </div>
    )
}
