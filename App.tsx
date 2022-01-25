import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { AppProvider } from './src/context';

import { Routes } from './src/routes';

import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';

import { LogBox, View } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" translucent />
        <AppProvider>
          <View style={{ flex: 1 }}>
            <Routes />
          </View>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
