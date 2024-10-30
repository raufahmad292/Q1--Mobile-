// App.js
// import './gesture-handler.native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './UserList'; // Import UserList component
import UserDetails from './UserDetailss'; // Import UserDetails component

// const Stack=\[] //= createStackNavigator();
const Stack ={}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} options={{ title: 'User List' }} />
        <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
