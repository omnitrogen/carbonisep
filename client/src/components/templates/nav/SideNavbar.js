
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/carbonisep/favicon.ico';

export default class SideNavbar extends React.Component {
    render() {
        return (
            <div className="position-absolute" style={{ backgroundColor: "#AAAAAA", left: 0, overflow: "hidden", height: "85%"}}>
                <Nav.Link href="quizz" className="text-white">Quizz empreinte carbone</Nav.Link>
                <Nav.Link href="join_game" className="text-white">Rejoindre une partie</Nav.Link>
                <Nav.Link href="create_game" className="text-white">Créer une partie</Nav.Link>
            </div>
        );
    };
};
