import React from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import { View, StyleSheet, Text } from 'react-native';
import { useExpenseContext } from '../../Context/ExpensesContext';
import NoExpenses from './NoExpenses';

const Expenses = (props) => {
  const { expenses } = useExpenseContext();

  return (
    <>
      {expenses && expenses.length > 0 ?
        <View style={{ width: '100%' }}>
          <Text style={styles.expensesTitle}>
            Expenses
          </Text>
          <Card style={styles.expenses}>
            < ExpensesList variant='expenses' />
          </Card>
        </View>
        :
        <NoExpenses />
      }
    </>

  );
};

export default Expenses;

const styles = StyleSheet.create({
  expenses: {
    padding: '1rem',
    backgroundColor: 'rgb(31, 31, 31)',
    marginBottom: '300px'
  },
  expensesTitle: {
    fontWeight: 'bold',
    padding: 10
  }
})