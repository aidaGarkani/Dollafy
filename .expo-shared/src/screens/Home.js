import { StyleSheet, ScrollView, View, Text } from 'react-native';
import * as React from 'react';
import Expenses from '../components/Expenses/Expenses';
import ExpensesInfo from '../components/Expenses/ExpensesInfo';
import CategoryContainer from '../components/Explore/CategoryContainer';
import foodIcon from '../../../assets/images/icons8-bagel-48.png';
import groceryIcon from '../../../assets/images/icons8-grocery-bag-48.png';
import transportationIcon from '../../../assets/images/icons8-public-transportation-48.png';
import personalIcon from '../../../assets/images/icons8-personal-60.png';
import incomeIcon from '../../../assets/images/icons8-income-64.png';

function Home({ navigation, route }) {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <ExpensesInfo />

        <View style={styles.containerCategory}>
          <Text style={styles.containerCategoryText}>
            Common Categories:
          </Text>
          <View style={styles.categoryView}>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              <CategoryContainer imageUri={foodIcon} name={'food'} />
              <CategoryContainer imageUri={groceryIcon} name={'grocery'} />
              <CategoryContainer imageUri={transportationIcon} name={'transportation'} />
              <CategoryContainer imageUri={personalIcon} name={'personal'} />
              <CategoryContainer imageUri={incomeIcon} name={'income'} />
            </ScrollView>
          </View>
        </View>
        <Expenses />
      </View >
    </ScrollView >
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
  },
  containerCategory: {
    flex: 1,
    paddingTop: 20,
  },
  containerCategoryText: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginLeft: 30

  },
  categoryView: {
    height: 80,
    marginTop: 20,
    marginLeft: 40
  }
});

