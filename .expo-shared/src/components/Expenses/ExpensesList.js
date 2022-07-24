import React from 'react';
import { Button, Icon, ListItem, Divider } from '@ui-kitten/components';
import { StyleSheet, View, Text } from 'react-native';
import ExpenseListItem from './ExpenseListItem';
import { useExpenseContext } from '../../Context/ExpensesContext';
import { dateChanger } from "../../utils/dateChanger";
import { categoriesData } from '../../utils/categoryChart';

const ExpensesList = (props) => {

    const { isLoading, expenses } = useExpenseContext();

    const renderItemAccessory = (props) => (
        <Button size='tiny'>Delete</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person' />
    );

    return (

        <View style={styles.expensesList}>
            {
                !isLoading && expenses && expenses.length > 0 && (props.variant === 'expenses' ? expenses.map((props, index) => {
                    return <ExpenseListItem
                        variant='expenses'
                        key={index}
                        category={props.category}
                        title={props.title}
                        amount={props.amount}
                        date={dateChanger(props.date)}
                        id={props.id} />
                }) : categoriesData(expenses).map((props, index) => {
                    return <ExpenseListItem
                        variant='categories'
                        key={index}
                        category={props.name}
                        title={props.name}
                        amount={props.total}
                    />
                }))

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