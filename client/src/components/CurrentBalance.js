import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function CurrentBalance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) =>
        parseInt(transaction.amount)
    );
    const totalAmount = amounts.reduce((total, amount) => (total += amount), 0);
    const netIncome = amounts
        .filter((amount) => amount > 0)
        .reduce((total, amount) => (total += amount), 0);
    const netExpense = Math.abs(
        amounts
            .filter((amount) => amount < 0)
            .reduce((total, amount) => (total += amount), 0)
    );

    return (
        <>
            <div className="current-balance-container">
                <div>YOUR BALANCE</div>
                <div className="current-balance">₹{totalAmount}</div>
            </div>
            <div className="income-expense-card">
                <div className="money plus">
                    <h4>INCOME</h4>
                    <p>₹{netIncome}</p>
                </div>
                <div className="money minus">
                    <h4>EXPENSES</h4>
                    <p>₹{netExpense}</p>
                </div>
            </div>
        </>
    );
}
