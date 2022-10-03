import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View, Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react'
import Game from  './Game'
import Final from './Final'
import Colors from '../styles/Colors'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 10) + 1020);
  const [modelVisible, setModelVisible] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [number, setNumber] = useState(0);

  function decide(input) {
    setInput('');
    if (isNaN(input) || input=='' || input.length > 4) {
      Alert.alert(
        "Invalid Number!",
        "The number has to be an integer between 1020 and 1029",
        [
          {
            text: "OK",
            onPress: () => setInput(''),
            style: "cancel"
          },
        ]
      );
    } else {
      num = parseInt(input);
      if (num < 1020 || num > 1029) {
        Alert.alert(
          "Invalid Number!",
          "The number has to be an integer between 1020 and 1029",
          [
            {
              text: "OK",
              onPress: () => setInput(''),
              style: "cancel"
            },
          ]
        );
      } else {
        setNumber(num);
        if (num == answer) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
        setModelVisible(true);
      }
    }
  }
  
  return (
    <LinearGradient colors={[Colors.background, Colors.gradient]} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess My Number</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.card}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Enter a Number</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput keyboardType='number-pad' style={styles.input} onChangeText={setInput} value={input}></TextInput>
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => setInput('')}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => decide(input)}/>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      <Game answer={answer} number={number} correct={correct} modelVisible={modelVisible} setModelVisible={setModelVisible} setFinalVisible={setFinalVisible}/>
      <Final win={correct} number={answer} finalVisible={finalVisible} setFinalVisible={setFinalVisible} setModelVisible={setModelVisible} setAnswer={setAnswer}/>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 5,
    backgroundColor: Colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,
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
  textWrapper: {
    flex: 1,
    marginTop: 80,
  },
  text: {
    fontSize: 30,
    color: Colors.text,
  },
  inputWrapper:{
    flex: 1,
  },
  input: {
    fontSize: 30,
    borderBottomWidth: 4,
    padding: 30,
  },
  bottomContainer: {
    flex: 4,
    alignItems: 'center',
  },
  buttonsWrapper: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    marginTop: 50,
    margin: 5,
    width: '30%',
  }
});
