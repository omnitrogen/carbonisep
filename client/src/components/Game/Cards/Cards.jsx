
import React, { Component } from "react";
import { Card } from "../Card";
import argent from "assets/money.png";
import score from "assets/score.png";

class Cards extends Component {
    constructor(props) {
        super(props);

        var cardsData = {} //retrieve from the db all the cards for this game; Expected data format should be like seen in state.cards

        //replace cards: [...] by cards: CardsData here
        this.state = {
            turn: 0,
            cards: [
                {
                    name: "Planter un arbre",
                    cost: 3,
                    score: 20,
                    background: 4 //this number is the category of the action; it displays the approppriated background
                },
                {
                    name: "Planter une fleur",
                    cost: 3,
                    score: 20,
                    background: 2 
                },
                {
                    name: "Planter un arbre",
                    cost: 3,
                    score: 20,
                    background: 3
                },
                {
                    name: "Planter un arbre",
                    cost: 3,
                    score: 20,
                    background: 2
                },
                {
                    name: "Planter un arbre",
                    cost: 3,
                    score: 20,
                    background: 2
                },
                {
                    name: "Planter un arbre",
                    cost: 3,
                    score: 20,
                    background: 2
                }               
            ]
        };
    }

    handleChosenCard = (cardData) => {
        //Assuming the game will be 10 turns long
        var continueGame = this.state.turn == 10;

        //The game continues unless it's the last turn, then Game will render the endgame
        this.props.onSelectCard(cardData, continueGame);

        if (continueGame) {
            this.setState({ turn: this.state.turn + 1 });
        }
    }

    render() {
        return (
            <div>
                <div className="w-80 p-4">
                    <div className="d-flex justify-content-between pb-5">
                        <h1>Actions</h1>
                        <div className="d-flex justify-content-end mr-4">
                            <p>Argent:</p>
                            <p className="font-weight-bold ml-1">{this.props.money}</p>
                            <img className="ml-2" src={argent} alt="Cout en argent" style={{ width: '4%', height: '80%' }} />
                            <p className="ml-3">Score:</p>
                            <p className="font-weight-bold ml-1">{this.props.score}</p>
                            <img className="ml-2" src={score} alt="Score actuel" style={{ width: '4%', height: '80%' }} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-around pt-5">
                        {/* Cards are updated when turn is updated */}
                        <Card data={this.state.cards[ this.state.turn * 3     ]} handleSubmit={this.handleChosenCard} />
                        <Card data={this.state.cards[(this.state.turn * 3) + 1]} handleSubmit={this.handleChosenCard} />
                        <Card data={this.state.cards[(this.state.turn * 3) + 2]} handleSubmit={this.handleChosenCard} />
                    </div>
                </div>
            </div>
        );
    } 
}

export { Cards };
