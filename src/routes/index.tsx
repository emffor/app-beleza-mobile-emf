import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { AddCard } from '../screens/AddCard';
import { AddAddress } from '../screens/AddAddress';
import { OrderStatus } from '../screens/OrderStatus';
import { Search } from '../screens/Search';


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
      <Search/>
    </NavigationContainer>
  )
}