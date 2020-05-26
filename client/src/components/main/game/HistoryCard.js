
import React, { Component } from "react";
import background1 from '../../../assets/cards/background1.png'
import background2 from '../../../assets/cards/background2.png'
import background3 from '../../../assets/cards/background3.png'
import background4 from '../../../assets/cards/background4.png'

export default class HistoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: {
                background1,
                background2,
                background3,
                background4
            }
        };
    }

    render() {
        return (
            <div>
                <div className="card text-center mx-1" style={{ width: '100%' }}>
                    <img className="card-img-top" src={this.props.card.background} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">{this.props.card.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}