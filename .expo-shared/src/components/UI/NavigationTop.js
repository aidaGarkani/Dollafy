import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { color } from 'react-native-reanimated'

const NavigationTop = (props) => {
    return (
        <View style={styles.navigationView}>
            <Text style={styles.navigation}>{props.name}</Text>
        </View>
    )
}

export default NavigationTop

const styles = StyleSheet.create({
    navigation: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        backgroundColor: '#43978D',
        color: 'white',
        width: '100%',
        height: '50px',
        padding: 10,
    },
})