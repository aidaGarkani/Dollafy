import React, { useState } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import NewExpense from '../NewExpense/NewExpense';

const CategoryContainer = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <NewExpense
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                categoryName={props.name} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={{ height: 80, maxWidth: 130, marginLeft: 15, borderWidth: 0.5, borderColor: '#dddddd', justifyContent: 'center', borderRadius: 10 }}>
                    <Image source={props.imageUri} style={{
                        flex: 1, width: 70,
                        height: 70, resizeMode: 'cover'
                    }} />
                </View >
            </TouchableOpacity>
        </>

    )
}

export default CategoryContainer

const styles = StyleSheet.create({
    containerCategory: {
        flex: 1,
        flexDirection: 'row',
    },
    containerCategoryView: {
        fontSize: 16,
        fontWeight: 700,
        paddingHorizontal: 20
    },
    categoryView: {
        height: 130,
        marginTop: 20
    }
});
