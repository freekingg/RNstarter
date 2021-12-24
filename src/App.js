import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import Store from './store';
import Router from './router';
import { NativeBaseProvider, Box } from 'native-base';


export default function App() {
  return (
    <StoreProvider store={Store}>
      <NativeBaseProvider style={styles.container}>
        <StatusBar style="dark-content" />
        <Router />
      </NativeBaseProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },

});
