// Imports libraries to make a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
    textStyle: {
        fontSize: 25
    }
};

// Make component avaiable to other parts of the app
export default Header;
