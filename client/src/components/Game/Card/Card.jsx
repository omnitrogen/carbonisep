import React, { Component } from "react";
import card_background1 from "assets/cards/background1.png";
import card_background2 from "assets/cards/background2.png";
import card_background3 from "assets/cards/background3.png";
import card_background4 from "assets/cards/background4.png";
import argent from "assets/money.png";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: [
                card_background1,
                card_background1,
                card_background2,
                card_background3,
                card_background4,
            ],
        };
    }

    render() {
        return (
            <div>
                <div className="card text-center m-3">
                    <img
                        className="card-img-top"
                        src={this.state.background[this.props.data.background]}
                        alt="Card image"
                    />
                    <div className="card-body">
                        <p className="card-text">{this.props.data.Name}</p>
                        <div className="d-flex justify-content-center">
                            <p className="mr-2">{this.props.data.Cost}</p>
                            <img
                                src={argent}
                                alt="Cout en argent"
                                style={{ width: "9%" }}
                            />
                        </div>
                    </div>
                    <a
                        className="card-footer bg-info text-white font-weight-bold"
                        onClick={() => this.props.handleSubmit(this.props.data)}
                    >
                        Choisir
                    </a>
                </div>
            </div>
        );
    }
}

export { Card };
