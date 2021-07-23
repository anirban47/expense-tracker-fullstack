import React from "react";
import "./App.css";
import { ExpenseTracker } from "./components";
import GlobalProvider from "./context/GlobalContext";

function App() {
    return (
        <GlobalProvider>
            <ExpenseTracker />
        </GlobalProvider>
    );
}

export default App;
