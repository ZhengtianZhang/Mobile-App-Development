import { StyleSheet, View, Button, Modal, Text } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'
import { LinearGradient } from 'expo-linear-gradient';

export default function Game({ answer, number, correct, modelVisible, setModelVisible, setFinalVisible }) {
  if (!correct) {
    let text="";
    if (answer<number) {
      text="Guess lower!";
    } else {
      text="Guess higher!"
    }
    return (
      <Modal visible = {modelVisible}>
        <LinearGradient colors={[Colors.background, Colors.gradient]} style={styles.container}>
          <View style={styles.card}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>You have chosen {number}{"\n"}That's not my number!{"\n"}{text}</Text>
            </View>
            <View style={styles.buttonsWrapper}>
              <Button title="I am done" onPress={() => {setModelVisible(false); setFinalVisible(true)}}/>
              <Button title="Let Me Guess Again" onPress={() => setModelVisible(false)}/>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    )
  } else {
    return (
      <Modal visible = {modelVisible}>
        <LinearGradient colors={[Colors.background, Colors.gradient]} style={styles.container}>
          <View style={styles.card}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Congrats! You Won!</Text>
            </View>
            <View style={styles.buttonsWrapper}>
              <Button title="Thank you!" onPress={() => {setModelVisible(false); setFinalVisible(true)}}/>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: Colors.title,
    fontSize: 25,
  },
  title: {
    fontSize: 25,
    color: Colors.title,
  },
  card: {
    flex: 5,
    backgroundColor: Colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    marginBottom: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.card,
    shadowColor: Colors.shadow,
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  text: {
    fontSize: 30,
    color: Colors.text,
    textAlign: 'center',
  },
  textWrapper: {
    flex: 1,
    marginTop: 50,
  },
  buttonsWrapper: {
    flex: 1,
  },
});