import { StyleSheet, View, Button, Modal, Image, Text } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'
import { LinearGradient } from 'expo-linear-gradient';

export default function Final({ win, number, finalVisible, setFinalVisible, setModelVisible, setAnswer }) {
  const link = 'https://picsum.photos/id/'+number+'/100/100';
  return (
    <Modal visible = {finalVisible}>
      <LinearGradient colors={[Colors.background, Colors.gradient]} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Game is over</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Here's your picture</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source = {win? {uri: link,}: require("../assets/unamused-face_1f612.png")} style={styles.image}/>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button title="Start Again" onPress={() => {setModelVisible(false); setFinalVisible(false); setAnswer(Math.floor(Math.random() * 10) + 1020)}}/>
        </View>
      </View>
      </LinearGradient>
    </Modal>
  )
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
  image: {
    height: 100,
    width: 100,
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
  imageWrapper: {
    flex: 2,
  },
  buttonsWrapper: {
    flex: 1,
  },
});