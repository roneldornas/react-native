// Imports libraries to make a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            height: 0,
            width: 2
        },
        shadowOpacity: 0.4
    },
    textStyle: {
        fontSize: 25
    }
};

// Make component avaiable to other parts of the app
export default Header;
