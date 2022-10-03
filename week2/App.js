import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View, SafeAreaView } from 'react-native';
import Header from './components/Header'
import Input from './components/Input'
import { useState } from 'react'

export default function App() {
  const name = "Zhengtian's First App";
  const onTextAdd = function (newText) {
    console.log(newText);
  };
  const [modelVisible, setModelVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name = {name}/>
        <Button title="Add a goal" onPress={() => setModelVisible(true)}/>
        <Input onTextAdd = {onTextAdd} modelVisible = {modelVisible} setModelVisible = {setModelVisible}/>
      </View>
      <View style={styles.bottomContainer}>
        <Text>You typed ...</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 4,
    alignItems: 'center',
  },
});
