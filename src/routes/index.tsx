import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialEditScreen from '../pages/Material/MaterialEdit';
import MyDrawer from './drawer';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Main" component={MyDrawer} />
      <Stack.Screen name="MaterialEditScreen" component={MaterialEditScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
