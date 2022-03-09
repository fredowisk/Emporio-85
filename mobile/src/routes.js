import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Dashboard from './pages/Dashboard';
import Main from './pages/Main';
import Insert from './pages/Insert';

const App = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Dashboard">
      <App.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen name="Main" component={Main} options={{headerShown: false}} />
      <App.Screen
        name="Insert"
        component={Insert}
        options={{headerShown: false}}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default Routes;
