
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import HistoryCard from "./HistoryCard";

export default class History extends Component {

    render() {
        return (
            <div>
                <div className="p-3 pt-5">
                    <div className="w-80 p-2">
                        <h1>Historique</h1>
                        <div className="d-flex">
                            <HistoryCard />
                            <HistoryCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}