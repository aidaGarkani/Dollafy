import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import NewExpense from '../components/NewExpenses/NewExpense';
// import Expenses from '../components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function Home({ navigation, route }) {
  const [expenses, setExpenses] = React.useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <View style={styles.container}>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <Expenses items={expenses} /> */}
    </View>
  );

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '1%',
    maxWidth: '100 %',
  },
});

