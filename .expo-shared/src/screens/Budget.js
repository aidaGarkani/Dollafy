import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import NavigationTop from '../components/UI/NavigationTop';
import Card from '../components/UI/Card';
import { PieChart } from 'react-native-chart-kit';
import { categoriesData } from '../utils/categoryChart';
import { useExpenseContext } from '../Context/ExpensesContext';
import ExpensesList from '../components/Expenses/ExpensesList';

const screenWidth = Dimensions.get('window').width;

const Budget = (props) => {
  const { expenses, isLoading } = useExpenseContext();

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <ScrollView style={styles.containerScroll}>
      <NavigationTop name={'Budget'} />
      <View style={styles.wrapper}>
        <Card>
          <View style={styles.container}>
            {!isLoading && < PieChart
              data={categoriesData(expenses)}
              width={screenWidth}
              height={200}
              chartConfig={chartConfig}
              accessor={"total"}
              backgroundColor={"transparent"}
              center={[1, 5]}
              absolute
            />}
          </View>
        </Card>
        <Card style={styles.expenses}>
          < ExpensesList variant='categories' />
        </Card>
      </View>
    </ScrollView>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    display: 'block !important',
    width: '100%',
  },
  containerScroll: {
    flex: 1,
    maxWidth: '100 %',
  },
  wrapper: {
    marginBottom: '100px'
  },
  expenses: {
    padding: '1rem',
    backgroundColor: 'rgb(31, 31, 31)',
    marginBottom: '300px'
  },
});
