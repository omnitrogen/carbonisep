
import React, { Component } from "react";
import JoinOrCreateGame from '../templates/JoinOrCreateGame';

export default class Home extends Component {
    render() {
        return (
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <p>Hello</p>
                    <JoinOrCreateGame/>
                </div>
            </div>
        );
    }
}