import React from "react";
import { HistoryCard } from "../HistoryCard";

function History() {
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

export { History };
