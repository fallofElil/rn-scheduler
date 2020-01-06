import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const AddTask = props => {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.textInput}/>
            <Button title="Добавить" />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: 290,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomWidth: 1,
        borderColor: 'red'
    },
    textInput: {
        width: 190,
        marginLeft: 'auto',
        borderBottomWidth: 1,
        borderColor: 'blue'
    }
})