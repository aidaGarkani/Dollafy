import { createContext, useState, useContext, useEffect } from "react";
import { firebase } from "../../../config";

export const ExpenseContext = createContext(
    {}
);

const ExpenseContextProvider = ({ children }) => {
    const [expenses, setExpenses] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const addExpense = async (expense) => {
        setIsLoading(true);
        try {
            const response = await firebase.firestore().collection('transactions').add(expense);
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
            getExpenses();
        }
    };

    const getExpenses = async () => {
        setIsLoading(true);
        try {
            const response = await firebase.firestore().collection('transactions').get()
            setExpenses(response.docs.map(doc => doc.data()));
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getExpenses()
    }, [])


    return <ExpenseContext.Provider value={{ addExpense, expenses, isLoading }}>{children}</ExpenseContext.Provider>
};

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext)
    return context;
};



export default ExpenseContextProvider;