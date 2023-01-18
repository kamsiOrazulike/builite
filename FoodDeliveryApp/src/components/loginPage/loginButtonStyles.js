import React from 'react';
import Logo from '../../../assets/images/GLogo.png';
import {StyleSheet, Text, View, Image, Alert, Pressable} from 'react-native';


const loginButtons = () => {
  return (
    <>
      <View style={styles.div}>
        <Pressable
          onPress={() => Alert.alert('Become member button clicked!')}
          style={styles.buttonFB}>
          <Text> Sign in using Facebook </Text>
        </Pressable>
      </View>
      <View style={styles.div}>
        <Pressable
          onPress={() => Alert.alert('Become member button clicked!')}
          style={styles.buttonGoogle}>
          <Text> Sign in using Google </Text>
        </Pressable>
      </View>
      <View style={styles.div}>
        <Pressable
          onPress={() => Alert.alert('Become member button clicked!')}
          style={styles.buttonApple}>
          <Text> Sign in using Apple </Text>
        </Pressable>
      </View>
      <View style={styles.div}>
        <Pressable
          onPress={() => Alert.alert('Become member button clicked!')}
          >
          <Text style={{color: '#FFF'}}> Continue as guest </Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  div: {
    display: 'flex',
    marginVertical: 14,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonFB: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 64,
    borderRadius: 8,
    elevation: 3,
    color: '#FFF',
    backgroundColor: '#2394FD',
  },
  
  buttonGoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 72,
    borderRadius: 8,
    elevation: 3,
    color: '#FFF',
    backgroundColor: '#DDDDDD',
  },

  buttonApple: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 76,
    borderRadius: 8,
    elevation: 3,
    color: '#FFF',
    backgroundColor: '#DDDDDD',
  },
});

export default loginButtons;
