import React from "react";
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import { View, StyleSheet } from "react-native";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (EnteredExpenseData) => {
        const expensesData = {
            ...EnteredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expensesData);
    }
    return (
        <View style={styles.newExpense}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </View>
    );
};

export default NewExpense;


const styles = StyleSheet.create({
    newExpense: {
        backgroundColor: '#a892ee',
        padding: '1rem',
        margin: '2rem auto',
        width: '95%',
        maxWidth: ' 95 %',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
    }

});