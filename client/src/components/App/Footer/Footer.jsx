import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "assets/carbonisep.png";
import triangleBermudes from "assets/triangleBermudes.png";

function Footer() {
    return (
        <footer id="footer" style={{ width: "100%" }}>
            <div
                className="d-flex w-80 justify-content-between mt-2"
                style={{
                    backgroundColor: "#88B03C",
                    alignItems: "baseline",
                    alignContent: "center",
                    bottom: "0",
                    width: "100%",
                    padding: "0.5rem",
                }}
            >
                <Navbar.Brand href="home">
                    <img src={logo} style={{ height: 50 }} alt="logo" />
                </Navbar.Brand>
                <div>
                    ©2020, Triangles des Bermudes. Tous droits réservés. En cas
                    de problèmes, contactez Triangle des Bermudes
                </div>
                <Navbar.Brand>
                    <img
                        src={triangleBermudes}
                        style={{ height: 50 }}
                        alt="Triangle des Bermudes"
                    />
                </Navbar.Brand>
            </div>
        </footer>
    );
}

export { Footer };
