import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ExpenseListItem(props) {
    return (
        <View style={styles().container}>
            <View style={styles().icon}>
                <Text>
                    Icon
                </Text>
            </View>
            <View>
                <Text style={styles().title}>Grocery Store</Text>
                <Text style={styles().subtitle}>02/04/2022</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={styles().amount}>
                <Text style={styles("expense").textColor}>
                    $100
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
        color: type === "expense" ? "red" : "green"
    }
});
