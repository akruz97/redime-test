import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialScreen from '../pages/Material';
import CategoryScreen from '../pages/Category/styles';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MaterialScreen"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="MaterialScreen" component={MaterialScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
