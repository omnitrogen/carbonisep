import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiResponse: "",
        };
    }

    async callAPI() {
        fetch("http://localhost:8000/hello")
            .then((res) => res.json())
            .then((res) => this.setState({ apiResponse: res.message }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <h3>yeahhh {this.state.apiResponse}</h3>
                </header>
            </div>
        );
    }
}

export default Menu;
