
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Participants } from "../Participants";
import { Stats } from "../Stats";
import { Cards } from "../Cards";
import { History } from "../History";
import { EndGame } from "../EndGame";
import logo from "assets/carbonisep.png";

class Game extends Component {
    //Each player must have the same questions so they must be stored in db when creating the game; see more in Cards component
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            money: 50,
            continueGame: true
        };
        this.history = React.createRef();
        this.stats = React.createRef();
    }

    handleEndTurn = (cardData, continueGame) => {
        var newScore = this.state.score + cardData.score
        this.setState({
            score: newScore,
            money: this.state.money - cardData.cost,
            continueGame: continueGame
        });

        this.history.current.newCard(cardData);
        this.stats.current.updateScore(newScore)
    }

    render() {
        return (
            <div>
                {this.state.continueGame &&
                    <div className="d-flex">
                        <div style={{ maxWidth: '50%' }}>
                            <Navbar.Brand href="home" className="mb-5">
                                <img
                                    src={logo}
                                    className=""
                                    style={{ width: '50%' }}
                                    alt="logo"
                                />
                            </Navbar.Brand>
                            <Stats ref={this.stats}/>
                        </div>
                        <div className="mw-25 mt-5">
                            <Cards score={this.state.score} money={this.state.money} onSelectCard={this.handleEndTurn} />
                        </div>
                    <div className="ml-4 d-flex flex-column justify-content-between" style={{ maxWidth: '25%' }}>
                        <History ref={this.history}/>
                            <Participants />
                        </div>
                    </div>
                } {!this.state.continueGame &&
                    {/* <EndGame /> */ }
                }
            </div>
        );        
    }
}

export { Game };
