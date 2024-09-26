import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import HomePage from './components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage text={"Rent a car in seconds"}></HomePage>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
});
