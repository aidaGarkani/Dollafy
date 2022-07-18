import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import NavigationTop from '../components/UI/NavigationTop';

const Analytics = () => {
    return (
        <View>
            <ScrollView style={styles.containerScroll}>
                <NavigationTop name={'Analytics'} />
                <View style={styles.wrapper}>
                </View>
            </ScrollView>
        </View>
    )
}

export default Analytics

const styles = StyleSheet.create({
    container: {
        display: 'block !important',
        width: '100%',
    },
    containerScroll: {
        flex: 1,
        maxWidth: '100 %',
    },
    wrapper: {
        marginBottom: '100px'
    },
    expenses: {
        padding: '1rem',
        backgroundColor: 'rgb(31, 31, 31)',
        marginBottom: '300px'
    },
});