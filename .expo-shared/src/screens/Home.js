import { StyleSheet, ScrollView, View } from 'react-native';
import * as React from 'react';
import Expenses from '../components/Expenses/Expenses';
import NavigationTop from '../components/UI/NavigationTop';
import ExpensesInfo from '../components/Expenses/ExpensesInfo';


function Home({ navigation, route }) {

  return (
    <ScrollView style={styles.container}>
      <NavigationTop name={'Home'} />
      <View style={styles.wrapper}>
        <ExpensesInfo />
        <Expenses />
      </View>
    </ScrollView>
  );

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100 %',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '100px'
  }
});

