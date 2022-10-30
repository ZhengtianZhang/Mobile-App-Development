import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from '../styles/Colors';

export default function ExpenseItem({ expense, onItemPress }) {
  return (
    <View style={styles.expenseTextContainer}>
      <Pressable
        onPress={() => {
          onItemPress(expense);
        }}
        android_ripple={{ color: Colors.ripple, foreground: true }}
        style={(obj) => {
          return obj.pressed && styles.pressedItem;
        }}
      >
        <View style={styles.expenseWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.expenseText}> {expense.text} </Text>
          </View>
          <View style={styles.numberWrapper}>
            <Text style={styles.expenseAmount}> {expense.amount} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseTextContainer: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: Colors.darkPurple,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textWrapper: {
    flex: 3,
  },
  expenseText: {
    fontSize: 18,
    color: Colors.white,
    padding: 12,
  },
  numberWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 3,
    borderRadius: 5,
  },
  expenseAmount: {
    fontSize: 18,
    color: Colors.darkPurple,
    padding: 12,
    textAlign: 'center',
  },
  pressedItem: {
    backgroundColor: Colors.pressed,
    opacity: 0.5,
    borderRadius: 5,
  },
  expenseWrapper: {
    flexDirection: 'row',
    width: 350,
  },
});