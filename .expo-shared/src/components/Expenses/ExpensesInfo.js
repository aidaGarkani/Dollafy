import React, { useState } from 'react';
import Card from '../UI/Card';
import { Button, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import NewExpense from '../NewExpense/NewExpense';
import { totalBalance } from '../../utils/totalBalance';
import { useExpenseContext } from '../../Context/ExpensesContext';

const ExpensesInfo = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { expenses, isLoading } = useExpenseContext();
    return (
        <View style={{ width: '100%' }}>
            <NewExpense
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
            <Card>
                <View style={styles.container}>
                    <Text>Account Balance</Text>
                    {!isLoading && expenses && <Text style={styles.amount}>${totalBalance(expenses)}</Text>}
                    <View style={styles.action}>
                        <Button
                            style={styles.button}
                            onPress={() => setModalVisible(true)}>Add Transaction</Button>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default ExpensesInfo

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        padding: 20
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10
    },
    action: {
        display: 'flex',
        flexDirection: 'row-reverse',

    },
    button: {
        width: '60%',
        borderRadius: 30,

    }
})