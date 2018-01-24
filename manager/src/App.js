import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
