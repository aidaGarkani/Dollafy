import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import NavigationTop from '../components/UI/NavigationTop';

const Budget = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  return (
    <ScrollView style={styles.container}>
      <NavigationTop name={'Budget'} />
      <View style={styles.wrapper}>
      </View>
    </ScrollView>
  );
};

export default Budget;

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
