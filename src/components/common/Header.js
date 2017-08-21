import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 3,
        borderBottomColor: '#708090'
    },
    titleStyle: {
        fontSize: 20,
        color: 'black'
    }
})

export { Header };