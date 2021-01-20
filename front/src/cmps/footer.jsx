

import React, { Component } from 'react'

export class Footer extends Component {

    state = {
        modalVisibility: 'hidden'
    };

    // hidden
    // var visibility = 'hidden'

    ompenModal = () => {
        var { modalVisibility } = this.state
        if (modalVisibility === 'hidden') modalVisibility = 'visible'
        else modalVisibility = 'hidden'
        this.setState({ modalVisibility: modalVisibility })
        console.log(this.state.modalVisibility);
    }
    render() {

        return (
            <footer>
               <h3 onClick={this.ompenModal}> 📦 Global shipping </h3>
                <h6>© Happy Faces 2021</h6>
                <section onClick={this.ompenModal} style={{ visibility: this.state.modalVisibility }} className="modal-background"></section>
                <div style={{ visibility: this.state.modalVisibility }} className="countries-modal" >
                    <div onClick={this.ompenModal} className="close">X</div>
                    <h3>Change Shipping Country</h3>
                    <div className="grid-countries">
                        <div>Australia</div>
                        <div>Österreich</div>
                        <div>België</div>
                        <div>Česká republika  </div>
                        <div>Danmark  </div>
                        <div>     Deutschland  </div>
                        <div>     España  </div>
                        <div>    France  </div>
                        <div>    Hong Kong   </div>
                        <div>    Italia  </div>
                        <div>    日本  </div>
                        <div>    Nederland  </div>
                        <div>    Norge  </div>
                        <div>    Schweiz  </div>
                        <div>    South Korea  </div>
                        <div>   Suomi  </div>
                        <div>   Sverige  </div>
                        <div>   UK  </div>
                    </div>
                </div>
            </footer>

        )
    }
}