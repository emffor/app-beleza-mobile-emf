import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { Home } from '../screens/Home';
import { ScheduleService } from '../screens/ScheduleService';
import { ConfirmSelectedModal } from '../screens/ConfirmSelectedModal';
import { Payment } from '../screens/Payment';


type User = {
  uid: string;
}

export function Routes() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((userInfo) => {
      setUser(userInfo);
    });

    return subscriber;
  },[]);

  return (
    <NavigationContainer>
      {/* {(user ? <AppTabRoutes /> : <AuthRoutes />)}  */} 
      <Payment />
    </NavigationContainer>
  )
}