import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/carbonisep.png";
import Avatar from "../Avatar";

export default class ProfileNavbar extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-between m-3">
                <Navbar.Brand href="home">
                    <img
                        src={logo}
                        className=""
                        style={{ width: "8%" }}
                        alt="logo"
                    />
                </Navbar.Brand>

                <div className="d-flex">
                    <p className="mr-2 mt-3 h-100"> {"NomDuProfil"} </p>
                    <Avatar />
                </div>
            </div>
        );
    }
}
