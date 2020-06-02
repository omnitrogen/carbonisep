import React, { Component } from "react";
import logo from "assets/carbonisep.png";

class EndGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idGame: 1,
            results: [],
        };
    }
    componentWillMount() {
        fetch("http://localhost:8000/endGame?idGame=" + this.state.idGame)
            .then((res) => res.json())
            .then((res) => this.setState({ results: res.results }));
    }

    render() {
        var lis = [];
        for (let aaa of this.state.results) {
            lis.push(
                <li>
                    {aaa.username} {aaa.result}
                </li>
            );
        }
        return <ul>{lis}</ul>;
    }
}

export { EndGame };
