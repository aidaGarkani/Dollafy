import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, TextComponent } from "react-native";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <View>
        <View style={styles.newExpenseControls}>
            <View>
                <Text style={styles.newExpenseControlText}>Title</Text>
                <TextInput style={styles.newExpenseControlInput}
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </View>
            <View>
                <Text style={styles.newExpenseControlText}>Amount</Text>
                <TextInput style={styles.newExpenseControlInput}
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
            </View>
            <View>
                <Text style={styles.newExpenseControlText}>Date</Text>
                <TextInput style={styles.newExpenseControlInput}
                    value={enteredDate}
                    onChange={dateChangeHandler} />
            </View>
        </View>
        <View style={styles.newExpenseActions}>
            <Pressable style={styles.newExpenseButton} onPress={submitHandler}>
                <Text style={{ color: 'white' }}>
                    Add Expanses
                </Text>
            </Pressable>
        </View>
    </View>
};

export default ExpenseForm;

const styles = StyleSheet.create({
    newExpenseButton: {
        textAlign: 'center',
        font: 'inherit',
        cursor: 'pointer',
        padding: '1rem ',
        border: '1px solid #40005d',
        backgroundColor: '#40005d',
        color: 'white',
        borderRadius: '12px',
        marginRight: ' 1rem',
    },
    newExpenseControls: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
        textAlign: 'left',
    },
    newExpenseControlText: {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        display: 'block',
    },
    newExpenseControlInput: {
        font: 'inherit',
        padding: '0.5rem',
        borderRadius: '6px',
        border: ' 1px solid #ccc',
        width: ' 95% ',
        maxWidth: '100 %',
        backgroundColor: 'white',
    },
    newExpenseActions: {
        textAlign: 'right',
    }
});
