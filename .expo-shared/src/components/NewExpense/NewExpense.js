import React from "react";
import ExpenseForm from './ExpenseForm'
import { View, StyleSheet } from "react-native";
import { Modal } from '@ui-kitten/components';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (EnteredExpenseData) => {
        const expensesData = {
            ...EnteredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expensesData);
    }
    return (
        <Modal
            style={styles.centeredView}
            visible={props.modalVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => props.setModalVisible(false)}
        >
            <View style={styles.newExpense}
            >
                <View>
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
                </View>
            </View>
        </Modal>
    );
};

export default NewExpense;


const styles = StyleSheet.create({
    newExpense: {
        padding: '1rem',
        margin: ' 2rem auto',
        width: ' 95%',
        maxWidth: '95%',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: ' 0 1px 8px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#e3e9e5',
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        width: '95%'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
