import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { RegistrationData } from '../screens/RegistrationData';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator 
    screenOptions={{
        headerShown: false,
    }}   
    >
      <Screen 
        name="Splash"
        component={Splash}
      />
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="RegistrationData"
        component={RegistrationData}
      />
    </Navigator>
  )
}