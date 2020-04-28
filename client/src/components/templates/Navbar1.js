    
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/carbonisep/favicon.ico';

class Navbar1 extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="home"><img src={logo} className="" alt="logo" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Acceuil</Nav.Link>
                        <Nav.Link href="about">CarbonISEP en quelques mots</Nav.Link>
                        <Nav.Link href="tips">Tips and Tricks</Nav.Link>
                    </Nav>
                    <Nav.Link href="connexion">Connexion</Nav.Link>
                </Navbar>
            </div>
        );
    };
};

export default Navbar1;
