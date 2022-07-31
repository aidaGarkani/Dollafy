import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import ChartBar from '../components/Chart/ChartBar';
import ChartList from '../components/Chart/ChartList';
import { useExpenseContext } from "../Context/ExpensesContext";
import ChartNotReady from "../components/Chart/ChartNotReady";

const Analytics = () => {
    const { expenses, isLoading } = useExpenseContext();

    return (

        <ScrollView style={styles.containerScroll}>
            {!isLoading && expenses.length > 0 ?
                <View>
                    <View style={styles.wrapper}>
                        <ChartList />
                        <ChartBar />
                    </View>
                </View> :
                <ChartNotReady />
            }

        </ScrollView >

    )
}

export default Analytics

const styles = StyleSheet.create({
    container: {
        display: 'block',
        width: '100%',
    },
    containerScroll: {
        flex: 1,
        maxWidth: '100 %',
    },
    wrapper: {
        marginBottom: 100
    },
    expenses: {
        padding: '1rem',
        backgroundColor: 'rgb(31, 31, 31)',
        marginBottom: 300
    }
});