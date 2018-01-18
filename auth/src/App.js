import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyDBnj2mFmnZ_6NzOnFg-8WMigt3lbYVoeY',
            authDomain: 'auth-497b3.firebaseapp.com',
            databaseURL: 'https://auth-497b3.firebaseio.com',
            projectId: 'auth-497b3',
            storageBucket: 'auth-497b3.appspot.com',
            messagingSenderId: '714660524920'
        });
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
