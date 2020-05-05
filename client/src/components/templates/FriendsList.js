
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Friend from './Friend'

export default class FriendsList extends Component {
    render() {
        return (
            <div className="d-flex flex-column" style={{ overflow: "hidden" }}>
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </div>
        );
    }
}
