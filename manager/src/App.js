import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDJ7DG5rbHdrLDkkbhtWFsdjfCVsEZn3vw',
            authDomain: 'manager-5246d.firebaseapp.com',
            databaseURL: 'https://manager-5246d.firebaseio.com',
            projectId: 'manager-5246d',
            storageBucket: 'manager-5246d.appspot.com',
            messagingSenderId: '891744075065'
        };
        
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
