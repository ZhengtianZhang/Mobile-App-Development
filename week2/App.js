import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header'
import Input from './components/Input'
import { useState } from 'react'

export default function App() {
  const name = "Zhengtian's First App";
  const onTextAdd = function (newText) {
    console.log(newText);
  };
  return (
    <View style={styles.container}>
      <Header name = {name}/>
      <Input onTextAdd = {onTextAdd}/>
      <StatusBar style="auto" />
    </View>
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
