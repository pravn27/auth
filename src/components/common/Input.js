import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { mainContainer, labelStyle, inputStyle } = styles;
    return(
        <View style={mainContainer}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid={'transparent'}
            />
        </View>
    )
}

const styles = {
    mainContainer:{
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    labelStyle:{
        flex: 1,
        paddingLeft: 10,
        fontSize: 18
    },
    inputStyle:{
       flex: 2,
       paddingLeft: 5,
       paddingRight: 5,
       fontSize: 15,
       color: '#000',
       lineHeight: 23
    }
}

export { Input };