import React from "react";
import { Card } from "../Card";
import argent from "assets/money.png";
import score from "assets/score.png";

function Cards() {
    return (
        <div>
            <div className="border border-dark rounded w-80 p-4">
                <div className="d-flex justify-content-between">
                    <h1>Actions</h1>
                    <div className="d-flex justify-content-end mr-4">
                        <p>Argent:</p>
                        <p className="font-weight-bold ml-1">12</p>
                        <img
                            className="ml-2"
                            src={argent}
                            alt="Cout en argent"
                            style={{ width: "4%", height: "80%" }}
                        />
                        <p className="ml-3">Score:</p>
                        <p className="font-weight-bold ml-1">12</p>
                        <img
                            className="ml-2"
                            src={score}
                            alt="Score actuel"
                            style={{ width: "4%", height: "80%" }}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export { Cards };
