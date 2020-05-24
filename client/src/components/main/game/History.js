
import React, { Component } from "react";
import HistoryCard from "./HistoryCard";

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_1: {
                background: 1,
                text: "Planter des fleurs"
            },
            card_2: {
                background: 2,
                text: "Supprimer ses mails"
            }
        };
    }

    render() {
        return (
            <div>
                <div className="p-3 pt-5">
                    <div className="w-80 p-2">
                        <h1>Historique</h1>
                        <div className="d-flex">
                            <HistoryCard card={this.state.card_1} />
                            <HistoryCard card={this.state.card_2} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}