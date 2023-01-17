import React from 'react';
import Logo from '../../../assets/images/GLogo.png';
import {StyleSheet, Text, View, Image} from 'react-native';

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
    top: '20%',
    left: '5%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  div: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 80,
    height: 80,
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});

const openingPage = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.div}>
          <Image style={styles.logo} source={Logo}></Image>
        </View>
      </View>
    </>
  );
};

export default openingPage;
