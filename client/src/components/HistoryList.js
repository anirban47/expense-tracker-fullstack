import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import HistoryItem from "./HistoryItem";

export default function HistoryList() {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ul className="history-list">
                {transactions.map((transaction) => {
                    return (
                        <HistoryItem
                            key={transaction._id}
                            transaction={transaction}
                        ></HistoryItem>
                    );
                })}
            </ul>
        </>
    );
}
