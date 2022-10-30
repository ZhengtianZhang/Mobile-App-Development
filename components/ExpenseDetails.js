import { View, StyleSheet, Pressable, Text, Alert } from 'react-native'
import React from 'react'
import { updateDB, updateDB2, deleteFromDB } from '../firebase/firestore'
import Colors from '../styles/Colors';

export default function ExpenseDetails({ route, navigation }) {

  async function onDelete(deletedKey) {
    await deleteFromDB(deletedKey);
  }

  async function markImportant(key) {
    if (route.params.expenseObject.isImportant) {
      await updateDB2(key);
    } else {
      await updateDB(key);
    }
  }

  const word = route.params.expenseObject.isImportant? "Unmark": "Mark";
  const alert = route.params.expenseObject.isImportant? 
    "Are you sure you want to UNMARK this as important?": 
    "Are you sure you want to MARK this as important?";

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper1}>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              Alert.alert(
                "Important",
                alert,
                [
                  {
                    text: "No",
                  },
                  {
                    text: "Yes", onPress: () => {
                    markImportant(route.params.expenseObject.key);
                    navigation.goBack();
                  }}
                ]
              );
            }}
            style={({ pressed }) => {
              return pressed && styles.pressedItm;
            }}
            android_ripple={{ color: Colors.ripple, foreground: true }}
          >
            <Text style={styles.expenseText}>{word} as important</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonWrapper2}>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              Alert.alert(
                "Delete",
                "Are you sure you want to delete this?",
                [
                  {
                    text: "No",
                  },
                  {
                    text: "Yes", onPress: () => {
                    onDelete(route.params.expenseObject.key);
                    navigation.goBack();
                  }}
                ]
              );
            }}
            style={({ pressed }) => {
              return pressed && styles.pressedItm;
            }}
            android_ripple={{ color: Colors.ripple, foreground: true }}
          >
            <Text style={styles.expenseText}>Delete</Text>
          </Pressable>
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
  buttonWrapper1: {
    marginTop: 100,
    flex: 1,
    fontSize: 18,
    justifyContent: "center",
  },
  buttonWrapper2: {
    marginBottom: 500,
    flex: 4,
    fontSize: 18,
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    backgroundColor: Colors.darkPurple,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 200,

  },
  pressedItm: {
    opacity: 0.5,
    backgroundColor: Colors.pressed,
    borderRadius: 5,
  },
  expenseText: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    padding: 8,
    width: 200,
  },
});