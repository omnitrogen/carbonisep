import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/carbonisep.png";
import triangleBermudes from "../../assets/triangleBermudes.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" style={{ width: "100%" }}>
        <div
          className="border border-dark w-80 d-flex justify-content-between"
          style={{ backgroundColor: "#88B03C", height: "10vh" }}
        >
          <Navbar.Brand href="home">
            <img src={logo} style={{ height: 50 }} alt="logo" />
          </Navbar.Brand>
          <p>
            ©2020, Triangles des Bermudes. Tous droits réservés. En cas de
            problèmes, contactez Triangle des Bermudes
          </p>
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
}
