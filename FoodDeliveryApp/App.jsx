import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#1B1E1C',
  },

  container: {
    top: '20%',
    left: '5%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: '#FFFFFF50',
  },

  h1: {
    fontSize: 36,
    fontWeight: 800,
    color: '#FFFFFF',
    // backgroundColor: '#00000050',
  },

  h2: {
    fontSize: 24,
    fontWeight: 300,
    color: '#FFFFFF',
    // backgroundColor: '#00000050',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.h1}>Hey there!</Text>
          <Text style={styles.h2}>Welcome to my first app</Text>
        </View>
      </View>
    </>
  );
};
export default App;
