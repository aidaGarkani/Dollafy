import React from 'react'
import ChartImage from '../../../../assets/images/undraw_Growing_re_olpi.png';
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
        maxHeight: 300,
        marginTop: 50,
        alignItems: 'center',
        margin: 20
    },
    image: {
        width: 330,
        height: 200,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 30
    }
})