import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/carbonisep.png";
import triangleBermudes from "../../assets/triangleBermudes.png";

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" style={{ width: "100%" }}>
                <div
                    className="border border-dark w-80 p-4 d-flex justify-content-between"
                    style={{ backgroundColor: "#88B03C" }}
                >
                    <Navbar.Brand href="home">
                        <img src={logo} style={{ zoom: 0.05 }} alt="logo" />
                    </Navbar.Brand>
                    <p>
                        Copyright 2020. Tous droits réservés. En cas de
                        problèmes, contactez Triangle des Bermudes
                    </p>
                    <img
                        src={triangleBermudes}
                        style={{ zoom: "0.06" }}
                        alt="Triangle des Bermudes"
                    />
                </div>
            </footer>
        );
    }
}
