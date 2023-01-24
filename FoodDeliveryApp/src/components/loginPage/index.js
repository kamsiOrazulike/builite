import React from 'react';
import SigninOptions from './loginButtonStyles';
import Logo from '../../../assets/images/GLogo.png';
import {StyleSheet, Text, View, Image, Alert, Pressable} from 'react-native';

const loginPage = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.div}>
            <Image style={styles.logo} source={Logo}></Image>
            <Text style={styles.h4}> Are you a GO Genesis member yet? </Text>
            <Pressable
              onPress={() => Alert.alert('Become member button clicked!')}
              style={styles.button}>
              <Text style={styles.buttontxt}> Become a member </Text>
            </Pressable>
          </View>
          <View style={styles.div}>
            <SigninOptions />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#111213',
  },

  container: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF50',
  },

  div: {
    display: 'flex',
    marginVertical: 48,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FF00FF40',
  },

  logo: {
    width: 200,
    height: 200,
    zIndex: 99999,
    display: 'flex',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#E2D7AE',
  },

  buttontxt: {
    color: '#000',
  },

  h1: {
    fontSize: 36,
    fontWeight: 800,
    color: '#FFFFFF',
  },

  h2: {
    fontSize: 24,
    fontWeight: 300,
    color: '#FFFFFF',
  },

  h4: {
    fontSize: 16,
    fontWeight: 300,
    color: '#FFFFFF',
    // backgroundColor: '#FF000050',
  },
});

export default loginPage;
