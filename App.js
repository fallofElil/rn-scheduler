import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTask } from './src/AddTask';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Органайзер"/>
      <AddTask />
      <Text>Текстовый контент для теста</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#dae0f2'
  },
  text: {
    textAlign: 'center',
    color: '#333'
  }
});
