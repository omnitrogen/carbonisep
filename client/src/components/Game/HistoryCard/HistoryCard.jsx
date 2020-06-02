
import React, { Component } from "react";
import card_background1 from "assets/cards/background1.png";
import card_background2 from "assets/cards/background2.png";
import card_background3 from "assets/cards/background3.png";
import card_background4 from "assets/cards/background4.png";

class HistoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: [
                card_background1,
                card_background1,
                card_background2,
                card_background3,
                card_background4
            ]
        };
    }

    render() {
        return (
            <div>
                {!this.props.card.name == "" &&
                    <div className="card text-center m-3">
                        <img
                        className="card-img-top"
                        src={this.state.background[this.props.card.background]}
                            alt="Card image"
                        />
                        <div className="card-body">
                        <p className="card-text">{this.props.card.name}</p>
                        </div>
                    </div>
                }
            </div>
        );
    };
}

export { HistoryCard };
