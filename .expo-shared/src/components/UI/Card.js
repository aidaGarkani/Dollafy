import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: '12px',
        boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
    }
})
