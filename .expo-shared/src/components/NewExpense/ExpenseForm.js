import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button, Icon, Datepicker, Select, SelectItem, Modal, Card } from '@ui-kitten/components';
import { useExpenseContext } from "../../Context/ExpensesContext";
import { validator } from '../../utils/validator';
const Categories = ['food', 'transportation', 'personal', 'grocery', 'income'];

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [selectedIndex, setSelectedIndex] = useState();
    const [date, setDate] = React.useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState(props.category);
    const { addExpense } = useExpenseContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState('');

    const CalendarIcon = (props) => (
        <Icon {...props} name='calendar' />
    );

    const titleChangeHandler = (value) => {
        setEnteredTitle(value);
    };
    const amountChangeHandler = (value) => {
        setEnteredAmount(value);
    };

    const submitHandler = (event) => {
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: date.toString(),
            category: selectedCategory
        };
        console.log(expenseData)
        const { isValid, errorMessage } = validator(expenseData);
        if (!isValid) {
            setError(errorMessage)
            setModalVisible(true)
            return
        }

        addExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setDate('');
        setSelectedCategory('');
        setSelectedIndex('');
        props.setVisibility(false);
    };

    const onSelectCategory = (index) => {
        if (!index) {
            setSelectedCategory(props.category)

        } else {
            setSelectedIndex(index);
            setSelectedCategory(Categories[index.row]);
        }
    }


    return <View>
        <Modal visible={modalVisible} style={styles.modal}>
            <Card disabled={true}>
                <Text style={styles.errorText}>{error}</Text>
                <Button
                    size='tiny'
                    style={styles.errorButton}
                    appearance='ghost'
                    onPress={() => setModalVisible(false)}>
                    Okayat!
                </Button>
            </Card>
        </Modal>
        <View style={styles.newExpenseControls}>
            <View>
                <Datepicker
                    label='Date'
                    placeholder={'Pick Date'}
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                    accessoryRight={CalendarIcon}
                    style={styles.input}
                    min={new Date('2020', '01', '01')}
                />
            </View>
            <View>
                <Input
                    style={styles.input}
                    size='medium'
                    placeholder='Expense Title'
                    value={enteredTitle}
                    onChangeText={titleChangeHandler}
                    label='Title'
                />
            </View>
            <View>
                <Input
                    style={styles.input}
                    size='medium'
                    placeholder='Expense Amount'
                    value={enteredAmount}
                    onChangeText={amountChangeHandler}
                    label='Amount'
                />

            </View>

        </View>
        <View>
            {
                !props.category &&
                <Select
                    style={styles.input}
                    label='Category'
                    value={selectedCategory}
                    placeholder='Select a category'
                    onSelect={onSelectCategory}>
                    <SelectItem value='Food' title='Food' />
                    <SelectItem value='Transportation' title='Transportation' />
                    <SelectItem value='Personal' title='Personal' />
                    <SelectItem value='Grocery' title='Grocery' />
                    <SelectItem value='Income' title='Income' />
                </Select>
            }

        </View>
        <View>
            <Button
                style={styles.button}
                size='small'
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
        gap: 10,
        marginBottom: 5,
        textAlign: 'left',
    },
    newExpenseActions: {
        textAlign: 'right',
    },
    input: {
        margin: 10,
        borderColor: '#43978D',
        borderRadius: 20,
        width: '90%',
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
    errorText: {
        margin: 20
    },
    errorButton: {
        color: '#43978D'
    },
    modal: {
        maxWidth: '90%'
    }
});

export default ExpenseForm;