// The first thing to do is import alibrary to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/componets/header';

// Create a component
const App = () => ( 
    <Header headerText={'Albums'} />
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);

