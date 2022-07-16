import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import { View, StyleSheet, Text } from 'react-native';

const Expenses = (props) => {

  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.expensesTitle}>
        Expenses
      </Text>
      <Card style={styles.expenses}>
        < ExpensesList />
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