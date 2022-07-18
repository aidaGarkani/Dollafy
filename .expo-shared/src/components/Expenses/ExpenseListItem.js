import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ExpenseItemIcon from './ExpenseItemIcon';

function ExpenseListItem(props) {
    return (
        <View style={styles().container}>
            <View style={styles().icon}>
                <Text>
                    <ExpenseItemIcon type={props.category} />
                </Text>
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
            </View>
        </View>
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
        paddingTop: "2px",
        color: "grey",
        fontSize: "12px"
    },
    amount: {
        padding: 5,
    },
    textColor: {
        color: type === "income" ? "green" : "red"
    }
});
