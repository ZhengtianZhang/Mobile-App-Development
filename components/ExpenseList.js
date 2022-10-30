import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { firestore } from '../firebase/firebase-setup';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import Colors from '../styles/Colors';

export default function AllExpenses({ route, navigation }) {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const q = route.params.isImportant? 
      query(collection(firestore, "expenses"), where("isImportant", "==", true)): 
      collection(firestore, "expenses");
    const unsubscribe = onSnapshot(
      q, (querySnapshot) => {
        if (querySnapshot.empty) {
          setExpenses([]);
          return;
        }
        setExpenses(
          querySnapshot.docs.map((snapDoc) => {
            let data = snapDoc.data();
            data = { ...data, key: snapDoc.id };
            return data;
          })
        );
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  function itemPressed(expense) {
    navigation.navigate("ExpenseDetails", { expenseObject: expense });
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomContainer}>
        <FlatList
          data={expenses}
          renderItem={({ item }) => {
            return (
              <ExpenseItem
                expense={item}
                onItemPress={itemPressed}
              />
            );
          }}
          contentContainerStyle={styles.scrollViewItems}
        ></FlatList>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightPurple,
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: Colors.lightPurple,
  },
  scrollViewItems: {
    alignItems: "center",
  },
});