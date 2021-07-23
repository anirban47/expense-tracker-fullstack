import React from "react";
import HistoryList from "./HistoryList";

export default function History() {
    return (
        <>
            <div className="history-container">
                <div>
                    HISTORY
                    <hr></hr>
                </div>
                <HistoryList />
            </div>
        </>
    );
}
