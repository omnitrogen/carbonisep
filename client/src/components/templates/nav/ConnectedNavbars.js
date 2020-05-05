
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ProfileNavbar from './ProfileNavbar';
import SideNavbar from './SideNavbar';
import StaticFooter from '../StaticFooter';
import Home from '../../main/static/Home';
import FriendsNavbar from './FriendsNavbar';

export  default class ConnectedNavbars extends React.Component {
    render() {
        return (
            <div>
                <ProfileNavbar/>
                <div className="">
                    <SideNavbar />
                    <div className="position-absolute" style={{ left: "15%", right: "15%", overflow: "hidden"}}>
                        <Home /> {/* Main de la page || function qui prend en params la page � montrer*/}
                    </div>
                    <FriendsNavbar />
                </div>
                <StaticFooter/>
            </div>

        );
    };
};
