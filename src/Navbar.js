import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Navbar = props => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#111344',
    },
    text: {
        paddingTop: 20,
        paddingBottom: 15,
        fontSize: 18,
        color: '#efe9e7',
        textAlign: 'center'        
    }
});