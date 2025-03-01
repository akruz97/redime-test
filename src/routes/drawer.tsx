import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialScreen from '../pages/Material';
import CategoryScreen from '../pages/Category/styles';
import MaterialEditScreen from '../pages/Material/MaterialEdit';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MaterialScreen"
        component={MaterialScreen}
        options={{
          title: 'Materiales',
        }}
      />
      <Drawer.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          title: 'Categorías',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
