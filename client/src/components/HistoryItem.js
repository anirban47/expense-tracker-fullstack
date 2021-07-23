import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function HistoryItem({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";

    function handleDelete(event) {
        event.preventDefault();
        deleteTransaction(transaction._id);
    }
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}
            <span>
                {sign}₹{Math.abs(transaction.amount)}
            </span>
            <button onClick={handleDelete} className="delete-btn">
                X
            </button>
        </li>
    );
}

export default HistoryItem;
