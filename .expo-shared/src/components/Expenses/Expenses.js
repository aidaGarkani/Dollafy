import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import { View, StyleSheet, Text } from 'react-native';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.expensesTitle}>
        Expenses
      </Text>
      <Card style={styles.expenses}>
        {/* <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        {props.items && props.items.length > 0 && < ExpensesList items={props.items} />}

      </Card>
    </View>
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