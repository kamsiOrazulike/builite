import React from 'react';
import Logo from '../../../assets/images/GLogo.png';
import {StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FFFFFF50',
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
    color: "#000000",
    backgroundColor: "#E2D7AE",
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

const loginPage = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.div}>
            <Image style={styles.logo} source={Logo}></Image>
            <Text style={styles.h4}> Are you a GO Genesis member yet? </Text>
            <Button
              onPress={() => Alert.alert('Become member clicked!')}
              title="Become a member"
              style={styles.button}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default loginPage;
