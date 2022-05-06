import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScheduleService } from '../screens/ScheduleService';
import { Home } from '../screens/Home';
import { Payment } from '../screens/Payment';
import { Search } from '../screens/Search';
import { AddCard } from '../screens/AddCard';


const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Payment" component={Payment} />
            <Screen name="Search" component={Search} />
            <Screen name="ScheduleService" component={ScheduleService}/>
            <Screen name="AddCard" component={AddCard} />
        </Navigator>
    );
}

