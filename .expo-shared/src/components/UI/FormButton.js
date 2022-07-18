import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight } from '../../utils/Dimentions';

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        width: '50%',
        height: windowHeight / 25,
        backgroundColor: '#43978D',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Roboto',
    },
})