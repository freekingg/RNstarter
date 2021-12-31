import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store from "./store";
import Router from "./router";
import { NativeBaseProvider, Box } from "native-base";
const { store, persistor } = Store();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider style={styles.container}>
          <StatusBar style="dark-content" />
          <Router />
        </NativeBaseProvider>
      </PersistGate>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
