import { async } from "@firebase/util";
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
            const response = await firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid).collection('transactions').add(expense);
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
            getExpenses();
        }
    };

    const removeExpense = async (expense) => {
        setIsLoading(true);
        try {
            firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid).collection('transactions').doc(expense.id).delete();
        } catch (error) {
            throw new Error(error);
        }
        setIsLoading(false);
        getExpenses();
    }

    const getExpenses = async () => {
        setIsLoading(true);
        try {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {
                    const response = await firebase.firestore().collection(`users/${user.uid}/transactions`).get();
                    setExpenses(response.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                }
            })
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getExpenses()
    }, [])

    return <ExpenseContext.Provider value={{ addExpense, expenses, isLoading, removeExpense }}>{children}</ExpenseContext.Provider>
};

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext)
    return context;
};



export default ExpenseContextProvider;