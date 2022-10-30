import { Text, View, Pressable, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { writeToDB } from '../firebase/firestore'
import Colors from '../styles/Colors';

export default function AddExpense({ navigation }) {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  
  const onTextAdd = async function (newText, newNumber) {
    await writeToDB({ text: newText, amount: newNumber, isImportant: false });
  };

  function decide() {
    if (!number) {
      Alert.alert(
        "Invalid Input",
        "You haven't entered an amount.",
        [
          {
            text: "OK",
          },
        ]
      );
    } else if (!text) {
      Alert.alert(
        "Invalid Input",
        "You haven't entered a description.",
        [
          {
            text: "OK",
          },
        ]
      );
    } else if (isNaN(number)) {
      Alert.alert(
        "Invalid Input",
        "The amount has to be a valid number.",
        [
          {
            text: "OK",
          },
        ]
      );
    } else {
      if (parseFloat(number) <= 0) {
        Alert.alert(
          "Invalid Input",
          "The amount has to be a positive number.",
          [
            {
              text: "OK",
            },
          ]
        );
      } else {
        onTextAdd(text, parseFloat(number));
        navigation.goBack();
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.title1Container}>
        <Text style={styles.title1}>Your Expense</Text>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.title2Container}>
          <Text style={styles.title2}>Amount</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input1} onChangeText={setNumber} value={number}></TextInput>
        </View>
        <View style={styles.title2Container}>
          <Text style={styles.title2}>Description</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input2}
            value={text}
            multiline={true}
            onChangeText={(newText) => {
              setText(newText);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={() => navigation.goBack()}
              android_ripple={{ color: Colors.ripple, foreground: true }}
              style={(obj) => {
                return obj.pressed && styles.pressedItem;
              }}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => decide()}
              android_ripple={{ color: Colors.ripple, foreground: true }}
              style={(obj) => {
                return obj.pressed && styles.pressedItem;
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  title1Container: {
    flex: 1,
  },
  title1: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flex: 5,
  },
  title2Container: {
    width: 300,
  },
  title2: {
    color: Colors.title,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: Colors.input,
    borderRadius: 5,
  },
  input1: {
    margin: 5,
    height: 50,
    width: 300,
    padding: 10,
    color: Colors.title,
    fontSize: 20,
  },
  input2: {
    margin: 5,
    height: 200,
    width: 300,
    padding: 10,
    color: Colors.title,
    fontSize: 20,
  },
  buttonWrapper: {
    flex: 7,
    alignItems: "center",
  },
  button: {
    margin: 5,
    width:'30%',
    backgroundColor: Colors.darkPurple,
    borderRadius: 5,
  },
  buttonsContainer:
  {
    flexDirection:'row',
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
    padding: 8,
    textAlign: 'center',
  },
  pressedItem: {
    backgroundColor: Colors.pressed,
    opacity: 0.5,
    borderRadius: 5,
  },
});