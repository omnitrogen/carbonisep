import React from "react";
import card_background1 from "assets/cards/background1.png";

function HistoryCard() {
    return (
        <div>
            <div className="card text-center mx-1" style={{ width: "100%" }}>
                <img
                    className="card-img-top"
                    src={card_background1}
                    alt="Card image cap"
                />
                <div className="card-body">
                    <p className="card-text">Planter un arbre</p>
                </div>
            </div>
        </div>
    );
}
export { HistoryCard };
