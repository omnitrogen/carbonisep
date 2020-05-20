import React from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import card_background1 from "assets/cards/background1.png";
import argent from "assets/money.png";

function Card() {
    return (
        <div>
            <div className="card text-center m-3">
                <img
                    className="card-img-top"
                    src={card_background1}
                    alt="Card image cap"
                />
                <div className="card-body">
                    <p className="card-text">Planter un arbre</p>
                    <div className="d-flex justify-content-center">
                        <p className="mr-2">3</p>
                        <img
                            src={argent}
                            alt="Cout en argent"
                            style={{ width: "9%" }}
                        />
                    </div>
                </div>
                <a
                    className="card-footer bg-info text-white font-weight-bold"
                    // onClick={this.selectAction}
                >
                    Choisir
                </a>
            </div>
        </div>
    );
}

export { Card };
