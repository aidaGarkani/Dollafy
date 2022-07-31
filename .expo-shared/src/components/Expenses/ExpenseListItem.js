import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import ExpenseItemIcon from './ExpenseItemIcon';
import Delete from '../../../../assets/icons8-delete-24.png';
import { useExpenseContext } from '../../Context/ExpensesContext';


function ExpenseListItem(props) {
    const { removeExpense, isLoading } = useExpenseContext();

    return (
        <View style={styles().container}>
            <View style={styles().icon}>
                <ExpenseItemIcon type={props.category} />
            </View>
            <View>
                <Text style={styles().title}>{props.title}</Text>
                {props.variant === 'expenses' && <Text style={styles().subtitle}>{props.date}</Text>}
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={styles().amount}>
                <Text style={styles(props.category).textColor}>
                    ${props.amount}
                </Text>
                {props.variant === 'expenses' &&
                    <TouchableHighlight onPress={() => removeExpense(props)}>
                        <Image source={Delete} style={{ height: 20, width: 20, marginTop: 2 }} />
                    </TouchableHighlight>
                }
            </View>
        </View >
    )
}

export default ExpenseListItem

const styles = (type) => StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
        margin: 10,
        borderRadius: 7,
        width: '95%'
    },
    title: {
        fontWeight: "bold"
    },
    icon: {
        padding: 5,
        paddingRight: 15,
    },
    subtitle: {
        paddingTop: 2,
        color: "grey",
        fontSize: 12
    },
    amount: {
        padding: 5,
        alignItems: 'center'
    },
    textColor: {
        color: type === "income" ? "green" : "red",
    },
});
