
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Participants from "./Participants";
import Stats from "./Stats";
import Cards from "./Cards";
import History from "./History";
import logo from "../../../assets/carbonisep.png";

export default class Game extends Component {

    render() {
        return (
            <div>
                <div className="d-flex">
                    <div style={{ maxWidth: '20%' }}>
                        <Navbar.Brand href="home" className="mb-5">
                            <img
                                src={logo}
                                className=""
                                style={{ width: '50%' }}
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Stats/>
                    </div>
                    <div className="mw-50 mt-5">
                        <Cards />
                    </div>
                    <div className="ml-4 d-flex flex-column justify-content-between" style={{ maxWidth: '25%' }}>
                        <History />
                        <Participants />
                    </div>
                </div>
            </div>
        );
    }
}