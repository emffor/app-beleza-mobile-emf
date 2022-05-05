import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../theme';
import { Home } from '../screens/Home';
import { ScheduleService } from '../screens/ScheduleService';
import { OrderStatus } from '../screens/OrderStatus';
const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue_marine,
        tabBarInactiveTintColor: theme.colors.shape_dark,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ), 
        }}
      />

    <Screen
        name="ScheduleService"
        component={ScheduleService}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ),     
        }}
      />

    <Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ),     
        }}
      />      
    </Navigator>
  )
}