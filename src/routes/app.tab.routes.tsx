import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from '../theme';
import { Home } from '../screens/Home';
import { ScheduleService } from '../screens/ScheduleService';
import { OrderStatus } from '../screens/OrderStatus';
import { Search } from '../screens/Search';
import HomeSvg from '../assets/tabRoutes/home.svg';


const { Navigator, Screen } = createBottomTabNavigator();


export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue_sky,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
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
            <Feather
              name="home"
              size={size}
              color={color}
            />
          ), 
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign
              name="search1"
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
            <AntDesign
              name="profile"
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
            <MaterialCommunityIcons
              name="cog"
              size={size}
              color={color}
            />
          ), 
        }}
      />


    </Navigator>
  )
}