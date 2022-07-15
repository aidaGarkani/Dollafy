import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Icon, Datepicker, Select, SelectItem } from '@ui-kitten/components';
import { useExpenseContext } from "../../Context/ExpensesContext";

const Categories = ['food', 'transportation', 'personal', 'income'];

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [selectedIndex, setSelectedIndex] = useState();
    const [date, setDate] = React.useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState('');
    const { addExpense } = useExpenseContext();
    console.log(useExpenseContext())
    const CalendarIcon = (props) => (
        <Icon {...props} name='calendar' />
    );

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        console.log('clicked')

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: date,
            Category: selectedCategory
        };
        addExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setDate('');
        setSelectedCategory('');
        setSelectedIndex('');
        props.setVisibility(false);
    };

    const onSelectCategory = (index) => {
        setSelectedIndex(index);
        setSelectedCategory(Categories[index.row]);
        console.log(selectedCategory)
    }


    return <View>
        <View style={styles.newExpenseControls}>
            <View>
                <Datepicker
                    label='Date'
                    placeholder={'Pick Date'}
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                    accessoryRight={CalendarIcon}
                    style={styles.input}
                />
            </View>
            <View>
                <Input
                    style={styles.input}
                    size='medium'
                    placeholder='Expense Title'
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
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    label='Amount'
                />

            </View>

        </View>
        <View>
            <Select
                label='Category'
                value={selectedCategory}
                placeholder='Select a category'
                onSelect={onSelectCategory}>
                <SelectItem value='Food' title='Food' />
                <SelectItem value='Transportation' title='Transportation' />
                <SelectItem value='Personal' title='Personal' />
                <SelectItem value='Income' title='Income' />
            </Select>
        </View>
        <View>
            <Button
                style={styles.button}
                size='small'
                // onFocus={ }
                onPress={submitHandler}>
                Add Transaction
            </Button>
        </View>
    </View >
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
        borderColor: '#43978D !important',
        borderRadius: '20 !important',
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