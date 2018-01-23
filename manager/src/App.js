import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
    rendder() {
        return (
            <Provider>
                <View>
                    <Text>
                        Hello!!!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
