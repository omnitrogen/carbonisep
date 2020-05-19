
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import card_background1 from '../../../assets/cards/background1.png'

export default class HistoryCard extends Component {

    render() {
        return (
            <div>
                <div className="card text-center mx-1" style={{ width: '100%' }}>
                    <img className="card-img-top" src={card_background1} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Planter un arbre</p>
                    </div>
                </div>
            </div>
        );
    }
}