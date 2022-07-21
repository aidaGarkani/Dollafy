import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import NoData from '../../../../assets/images/undraw_taken_re_yn20.svg';

const NoExpenses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>There is not any transactions yet!Please add transaction!</Text>
            <Image source={NoData} style={styles.image} />
        </View>

    )
}

export default NoExpenses

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        marginTop: 50,
        marginLeft: 20,
        alignItems: 'center',
    },
    image: {
        width: 275,
        height: 300,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 30
    }
})