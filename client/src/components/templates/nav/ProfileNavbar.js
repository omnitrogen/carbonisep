
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/carbonisep/favicon.ico';
import Avatar from '../Avatar';

export default class ProfileNavbar extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-between m-3">
                <Navbar.Brand href="home">
                    <img src={logo} className="" alt="logo" />
                </Navbar.Brand>

                <div className="d-flex">
                    <p className="mr-2 mt-3 h-100"> {"NomDuProfil"} </p>
                    <Avatar/>
                </div>
            </div>
        );
    };
};
