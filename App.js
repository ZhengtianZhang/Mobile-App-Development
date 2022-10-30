import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ExpenseDetails from "./components/ExpenseDetails";
import Colors from './styles/Colors';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: Colors.darkPurple },
        headerTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.darkPurple },
        tabBarTintColor: Colors.white,
        tabBarTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All Expenses') {
            iconName = 'pricetag';
          } else if (route.name === 'Important Expenses') {
            iconName = 'card';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
      })}
    >
      <Tab.Screen 
        name="All Expenses" 
        component={ExpenseList} 
        initialParams={{isImportant: false}}
        options={({ navigation }) => {
          return {
            headerRight: () => (
              <View  style={styles.button}>
                <Pressable
                  onPress={() => navigation.navigate("Add Expense")}
                  android_ripple={{ color: Colors.ripple, foreground: true }}
                  style={(obj) => {
                    return obj.pressed && styles.pressedItem;
                  }}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </View>
            ),
          };
        }} 
      />
      <Tab.Screen 
        name="Important Expenses" 
        component={ExpenseList} 
        initialParams={{isImportant: true}} 
        options={({ navigation }) => {
          return {
            headerRight: () => (
              <View  style={styles.button}>
                <Pressable
                  onPress={() => navigation.navigate("Add Expense")}
                  android_ripple={{ color: Colors.ripple, foreground: true }}
                  style={(obj) => {
                    return obj.pressed && styles.pressedItem;
                  }}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </View>
            ),
          };
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.darkPurple },
          headerTintColor: Colors.white,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainMenu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ExpenseDetails"
          component={ExpenseDetails}
          options={({ route }) => {
            return {
              title: route.params.expenseObject.text,
            };
          }}
        />
        <Stack.Screen
          name="Add Expense"
          component={AddExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 25,
    color: Colors.white,
    padding: 8,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  pressedItem: {
    backgroundColor: Colors.pressed,
    opacity: 0.5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: Colors.darkPurple,
    borderRadius: 5,
    marginRight: 15,
  },
});