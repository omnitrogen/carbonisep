    
import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from './carbonisep.png';

class Navbar1 extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Navbar.Brand href="home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="features">Features</Nav.Link>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav.Link href="pricing">Connexion</Nav.Link>
                </Navbar>
            </div>
        );
    };
};

export default Navbar1;
