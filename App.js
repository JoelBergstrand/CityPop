/**
 * CityPop
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator}  from "./navigators/MainStackNavigator";

// Initalizes the navigation structure
const App = () => {
  
  return (
    <NavigationContainer>
      < MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;