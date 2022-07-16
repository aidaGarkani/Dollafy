import React from 'react';
import { Button, Icon, ListItem, Divider } from '@ui-kitten/components';
import { StyleSheet, View, Text } from 'react-native';
import ExpenseListItem from './ExpenseListItem';
import { useExpenseContext } from '../../Context/ExpensesContext';
import { dateChanger } from "../../utils/dateChanger";

const ExpensesList = (props) => {

    const { isLoading, expenses } = useExpenseContext();

    const renderItemAccessory = (props) => (
        <Button size='tiny'>Delete</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person' />
    );

    console.log(expenses)
    return (

        <View style={styles.expensesList}>
            {
                !isLoading &&
                expenses.map((props) => {
                    return <ExpenseListItem
                        // icon={props.icon}
                        category={props.category}
                        title={props.title}
                        amount={props.amount}
                        date={dateChanger(props.date)} />
                })
            }
        </View>

    );
};

export default ExpensesList;

const styles = StyleSheet.create({
    container: {
        maxHeight: 192,
    },
    expensesList: {
        width: '95%',
    }
});