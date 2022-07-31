import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text } from 'react-native';
import Card from '../components/UI/Card';
import { PieChart } from 'react-native-chart-kit';
import { categoriesData } from '../utils/categoryChart';
import { useExpenseContext } from '../Context/ExpensesContext';
import ExpensesList from '../components/Expenses/ExpensesList';
import NoExpenses from '../components/Expenses/NoExpenses';

const screenWidth = Dimensions.get('window').width;

const Budget = (props) => {
  const { expenses, isLoading } = useExpenseContext();

  const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.wrapper}>
        {expenses && expenses.length > 0 && <View style={styles.container}>
          {!isLoading && < PieChart
            data={categoriesData(expenses)}
            width={Dimensions.get('window').width - 16}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            height={200}
            chartConfig={chartConfig}
            accessor={"total"}
            backgroundColor={"transparent"}
            paddingLeft="15"
            absolute
          />}
        </View>}
        {expenses && expenses.length > 0 ?
          <Card style={styles.expenses}>
            < ExpensesList variant='categories' />
          </Card> :
          <NoExpenses style={styles.noExpense} />
        }

      </View>
    </ScrollView>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  containerScroll: {
    flex: 1,
    maxWidth: '100 %',
  },
  wrapper: {
    marginBottom: 300,
  },
  expenses: {
    padding: 5,
    backgroundColor: 'rgb(31, 31, 31)',
    marginBottom: 300
  },
  noExpense: {
    marginTop: 100
  }
});
