
import React, { Component } from "react";
import { HistoryCard } from "../HistoryCard";

//Not up to date yet, data structure has changed
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: {
                name: "",
                background: 1
            },
            card2: {
                name: "",
                background: 1
            }
        };
    }

    //On new card chosen, the last card becomes the second last card and the new card becomes the last card
    newCard = (cardData) => {
        this.setState({
            card2: this.state.card1
        });

        this.setState({
            card1: {
                name: cardData.name,
                background: cardData.background
            }
        });
    };

    render() {
        return (
            <div>
                <div className="p-3 pt-5">
                    <div className="w-80 p-2">
                        <h1>Historique</h1>
                        <div className="d-flex">
                            <HistoryCard card={this.state.card1} />
                            <HistoryCard card={this.state.card2} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { History };

