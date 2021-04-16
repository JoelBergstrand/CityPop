/*
* Main navigator to handle screens
*/


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import DisplayCity from "../screens/DisplayCity";
import DisplayCountry from "../screens/DisplayCountry";
import SearchCity from "../screens/SearchCity";
import SearchCountry from "../screens/SearchCountry";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "CityPop"
            }}
        >
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
            <Stack.Screen name="DisplayCity" component={DisplayCity}/>
            <Stack.Screen name="DisplayCountry" component={DisplayCountry}/>
            <Stack.Screen 
                name="SearchCity" 
                component={SearchCity}
                initialParams={{city: []}}
            />
            <Stack.Screen 
                name="SearchCountry" 
                component={SearchCountry}
                initialParams={{country: []}}
            />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };