import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from '../theme';
import { OrderStatus } from '../screens/OrderStatus';
import { Search } from '../screens/Search';
import { General } from '../screens/General';
import { AppStackRoutes } from './app.stack.routes';
import HomeSvg from '../assets/tabRoutes/home.svg';
import SearchSvg from '../assets/tabRoutes/search.svg';
import OrderSvg from '../assets/tabRoutes/order.svg';
import CogSvg from '../assets/tabRoutes/cog.svg';


const { Navigator, Screen } = createBottomTabNavigator();


export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.coral,
        tabBarInactiveTintColor: theme.colors.blue_sky,
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
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeSvg width={size} height={size} fill={color} />
          ), 
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SearchSvg width={size} height={size} fill={color} />
          ),     
        }}
      />

    <Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{
          tabBarIcon: ({ size, color }) => (
            <OrderSvg width={size} height={size} fill={color} />
          ),     
        }}
      /> 

    <Screen
        name="General"
        component={General}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CogSvg width={size} height={size} fill={color} />
          ), 
        }}
      />


    </Navigator>
  )
}