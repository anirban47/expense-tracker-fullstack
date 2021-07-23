import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddNewTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const { addTransaction } = useContext(GlobalContext);

    function handleTextOnChange(event) {
        setText(event.target.value);
    }

    function handleAmountOnChange(event) {
        setAmount(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTransaction = {
            text: text,
            amount: amount,
        };
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <>
            <div className="add-transaction-container">
                <div>
                    ADD NEW TRANSACTION<hr></hr>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Transaction Details</label>
                        <input
                            type="text"
                            value={text}
                            onChange={handleTextOnChange}
                            placeholder="Enter transaction details"
                        ></input>
                    </div>
                    <div className="form-control">
                        <label>Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountOnChange}
                            placeholder="Enter transaction amount"
                        ></input>
                    </div>

                    <button disabled={!amount} className="submit-button">
                        Add transaction
                    </button>
                </form>
            </div>
        </>
    );
}
