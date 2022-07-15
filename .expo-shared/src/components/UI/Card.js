import React from 'react';
import { View, StyleSheet } from 'react-native';
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: '12px',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
    margin: '2%',
    alignItems: 'center'

  }
})
