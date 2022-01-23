import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';

import { AppProvider } from './src/context';

import { Routes } from './src/routes';

import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const config = {
  screens: {
    SignIn: {
      path: 'signIn',
    },
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const linking = {
    prefixes: ['https://appquiz.com'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" translucent backgroundColor="transparent" />
        <AppProvider>
          <View style={{ flex: 1 }}>
            <Routes />
          </View>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
