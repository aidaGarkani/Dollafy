import { createContext, useState, useContext } from "react";
import { firebase } from "../../../config";

export const ExpenseContext = createContext(
    {}
);

const ExpenseContextProvider = ({ children }) => {
    const [expenses, setExpenses] = useState();

    const addExpense = async (expense) => {
        try {
            const response = await firebase.firestore().collection('transactions').add(expense);
        } catch (error) {
            throw new Error(error);
        }
    };



    return <ExpenseContext.Provider value={{ addExpense }}>{children}</ExpenseContext.Provider>
};

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext)
    return context;
};



export default ExpenseContextProvider;