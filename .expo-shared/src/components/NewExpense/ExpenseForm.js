import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Icon } from '@ui-kitten/components';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [date, setDate] = React.useState(new Date());

    const CalendarIcon = (props) => (
        <Icon {...props} name='calendar' />
    );

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
                <Input
                    style={styles.input}
                    size='medium'
                    placeholder='Expense Title'
                    // {...mediumInputState}
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    label='Title'
                />
            </View>
            <View>
                <Input
                    style={styles.input}
                    size='medium'
                    placeholder='Expense Amount'
                    // {...mediumInputState}
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    label='Amount'
                />

            </View>
            <View>
                {/* <Layout style={styles.container} level='1'>
                    <Datepicker
                        label='Label'
                        caption='Caption'
                        placeholder='Pick Date'
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                        accessoryRight={CalendarIcon}
                    />
                </Layout> */}
            </View>
        </View>
        <View>
            <Button style={styles.button} size='small' onClick={submitHandler}>
                Add Expense
            </Button>
        </View>
    </View>
};

const styles = StyleSheet.create({
    newExpenseControls: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
        textAlign: 'left',
    },
    newExpenseActions: {
        textAlign: 'right',
    },
    input: {
        marginVertical: 2,
        borderColor: '#43978D',
        borderRadius: 20,
    },
    container: {
        minHeight: 360,
    },
    button: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#43978D',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#43978D'
    },
});

export default ExpenseForm;