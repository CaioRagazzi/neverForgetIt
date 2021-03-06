import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens } from 'react-native-screens';

import Navigation from "./src/navigation/index.js";

useScreens();

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
