import React, { Component } from "react";
import Friend from "./Friend";

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
