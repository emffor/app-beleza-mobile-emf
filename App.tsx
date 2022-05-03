import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme/index';


import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { Routes } from './src/routes';
import { RegistrationData } from './src/screens/RegistrationData';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
}


