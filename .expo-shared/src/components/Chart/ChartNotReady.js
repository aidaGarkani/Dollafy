import React from 'react'
import ChartImage from '../../../../assets/images/undraw_growing_re_olpi.svg';
import { View, StyleSheet, Text, Image } from 'react-native';


const ChartNotReady = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>There is Not enough data to view the analysis!</Text>
            <Image source={ChartImage} style={styles.image} />
        </View>

    )
}

export default ChartNotReady

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        marginTop: 50,
        marginLeft: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 30
    }
})