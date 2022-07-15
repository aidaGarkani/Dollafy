import React from 'react';
import { Button, Icon, ListItem, Divider } from '@ui-kitten/components';
import { StyleSheet, View, Text } from 'react-native';
import ExpenseListItem from './ExpenseListItem';

const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const ExpensesList = (props) => {

    const renderItemAccessory = (props) => (
        <Button size='tiny'>Delete</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person' />
    );

    const renderItem = ({ props }) => {
        console.log(props)
        return <ListItem
            title={`${props.title}`}
            description={`${props.amount}`}
            ItemSeparatorComponent={Divider}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
        />
    }
    console.log(props.items)
    console.log(data)



    return (
        // <List
        //     style={styles.container}
        //     data={props.items}
        //     renderItem={renderItem}
        // />

        <View style={styles.expensesList}>
            {
                props.items.map((item) => {
                    return <ExpenseListItem Icon={<Text>Hi</Text>} Title={<Text>Hi</Text>} Amount={<Text>Hi</Text>} />
                })
            }
        </View>

    );
};

export default ExpensesList;

const styles = StyleSheet.create({
    container: {
        maxHeight: 192,
    },
    expensesList: {
        width: '95%',
    }
});