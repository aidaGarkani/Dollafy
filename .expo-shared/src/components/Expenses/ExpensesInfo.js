import React, { useState } from 'react';
import Card from '../UI/Card';
import { Button, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import NewExpense from '../NewExpense/NewExpense';

const ExpensesInfo = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ width: '100%' }}>
            <NewExpense
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
            <Card>
                <View style={styles.container}>
                    <Text>Account Balance</Text>
                    <Text style={styles.amount}>$786</Text>
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
        display: 'block !important',
        width: '100%',
        padding: 20
    },
    amount: {
        fontSize: '24px',
        fontWeight: 'bold',
        padding: 10
    },
    action: {
        display: 'flex',
        flexDirection: 'row-reverse',

    },
    button: {
        width: '50%',
        borderRadius: 30,

    }
})