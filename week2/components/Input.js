import { View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Input({ onTextAdd }) {
    const [input, setInput] = useState('');
  return (
    <View>
      <TextInput placeholder='type here' onChangeText={setInput}></TextInput>
      <Button title="confirm" onPress={() => onTextAdd(input)}/>
    </View>
  )
}