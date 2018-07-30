/** @format */
//import a libary to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//create component
const App = () => (
  <Header />
);


//Render it to device
AppRegistry.registerComponent('albums', () => App);
