import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    // function useStickyState(defaultValue, key) {
    //     const [value, setValue] = useState(() => {
    //         const stickyValue = window.localStorage.getItem(key)

    //         return stickyValue!== null?JSON.parse(stickyValue):defaultValue
    //     })

    //     useEffect(() => {
    //         window.localStorage.setItem(key, JSON.stringify(value))
    //     }, [value, setValue])

    //     return [value, setValue]
    // }

    const [transactions, updateTransactions] = useState([]);

    async function getTransactions() {
        try {
            const res = await fetch("/api/transactions").then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            });

            updateTransactions(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    async function addTransaction(newTransaction) {
        try {
            const res = await fetch("/api/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTransaction),
            })
                .then((response) => response.json())
                .catch((error) => {
                    console.error("Error:", error);
                });

            updateTransactions([res.data, ...transactions]);
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteTransaction(_id) {
        try {
            const res = await fetch(`/api/transactions/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .catch((error) => {
                    console.error("Error:", error);
                });
            console.log(res);
        } catch (err) {
            console.error(err);
        }

        updateTransactions(
            transactions.filter((transaction) => transaction._id !== _id)
        );
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions,
                getTransactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
