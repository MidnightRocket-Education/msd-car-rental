import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from './AboutScreen';
import ReviewsScreen from './ReviewsScreen';
import { dummyCars } from './data/dummyCars';

const Tab = createMaterialTopTabNavigator();

const CarDetailsTabs = ({ car }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" children={() => <AboutScreen car={car} />} />
      <Tab.Screen name="Reviews" component={ReviewsScreen} />
    </Tab.Navigator>
  );
};

export default CarDetailsTabs;