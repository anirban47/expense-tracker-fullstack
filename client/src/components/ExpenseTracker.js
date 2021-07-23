import React from "react";
import { CurrentBalance, AddNewTransaction, History } from ".";

export default function ExpenseTracker() {
    return (
        <div className="expense-tracker-container">
            <h1 className="heading">Expense Tracker</h1>
            <CurrentBalance />
            <History />
            <AddNewTransaction />
        </div>
    );
}
