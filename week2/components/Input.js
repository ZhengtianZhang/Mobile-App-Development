import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Input({ onTextAdd, modelVisible, setModelVisible }) {
    const [input, setInput] = useState('');
  return (
    <Modal visible = {modelVisible}>
    <View style={styles.container}>
      <Image source = {require("../assets/2617812.png")} style={styles.image}/>
      <TextInput placeholder='type here' onChangeText={setInput}></TextInput>
      <View style={styles.buttonsWrapper}>
        <View style={styles.button}>
          <Button title="Confirm" onPress={() => {onTextAdd(input); setModelVisible(false)}} disabled = {input? false: true}/>
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={() => setModelVisible(false)}/>
        </View>
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
    width: '30%',
  }
});