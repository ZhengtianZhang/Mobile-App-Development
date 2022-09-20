import { View, Text } from 'react-native'
import React from 'react'

export default function Header({ name }) {
  return (
    <View>
      <Text>Open up App.js to start working on {name}!</Text>
    </View>
  )
}