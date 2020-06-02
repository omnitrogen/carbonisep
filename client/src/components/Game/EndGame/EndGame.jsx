import React, { Component } from "react";
import { Navigation } from "components/App/Navigation";
import logo from "assets/carbonisep.png";

class EndGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [1],
            load: false,
        };
    }
    componentDidMount() {
        fetch(
            "http://localhost:8000/endGame?" +
                "idGame=" +
                this.props.idGame +
                "&idPlayer=" +
                this.props.idPlayer +
                "&score=" +
                this.props.score
        )
            .then((res) => res.json())
            .then((res) => this.setState({ results: res.results, load: true }));
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="p-3 d-flex justify-content-center pt-5">
                    <div className="border border-dark rounded w-75 p-5">
                        <h2>
                            Partie terminée <br />
                        </h2>
                        <h3>
                            Votre résultat a bien été enregistré dans la base de
                            donée{" "}
                        </h3>
                        <p>Votre score : {this.props.score}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export { EndGame };
