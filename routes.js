import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import List from './src/pages/List';
import ValuesPresentation from './src/pages/ValuesPresentation';

const Stack = createStackNavigator();

function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Values" component={ValuesPresentation}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;