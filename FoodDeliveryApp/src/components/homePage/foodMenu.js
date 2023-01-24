import React from 'react';
import JollofImage from '../../../assets/images/Beef-Fried-Rice-blog-2.jpeg';
import {StyleSheet, Text, View, Image} from 'react-native';

const FoodItem = () => {
  return (
    <View style={styles.menuItem}>
        <View style={styles.divColumn}>
          <Text style={styles.h3}> Jollof rice Combo </Text>
          <Text style={styles.price}> N4500 </Text>
          <Text style={styles.h5}>
            A serving of jollof rice with chicken thigh. Truly a meal for only
            the mighty! Best accompanied with a bottle of Fanta.
          </Text>
        </View>
        <Image source={JollofImage} style={styles.menuImage}></Image>
    </View>
  );
};

const FoodMenu = () => {
  return (
    <View style={styles.container}>
      <FoodItem />
    </View>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111213',
  },

  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    // backgroundColor: '#FFFFFF50',
  },

  divColumn: {
    display: 'flex',
    marginVertical: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FF000040',
  },

  divRow: {
    width: '100%',
    display: 'flex',
    marginVertical: 8,
    flexDirection: 'row',
  },

  menuItem: {
    width: '90%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF50',
  },

  menuImage: {
    width: 105,
    height: 95,
    borderRadius: 8,
  },

  ballSeperator: {
    width: 5,
    height: 5,
    marginHorizontal: 5,
    borderRadius: 100,
    backgroundColor: '#FFF',
  },

  header: {
    top: 50,
    width: 350,
    height: 40,
    zIndex: 99999,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FF00FF40',
  },

  logo: {
    width: 40,
    height: 40,
    position: 'relative',
  },

  graphic: {
    width: 50,
    height: 50,
  },

  search: {
    width: 24,
    height: 26,
    position: 'relative',
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
    marginVertical: 2,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  h3: {
    fontSize: 20,
    marginVertical: 2,
    fontWeight: 600,
    color: '#FFFFFF',
  },
  price: {
    fontSize: 16,
    marginVertical: 2,
    fontWeight: 400,
    color: '#E2D7AE',
  },
  h5: {
    fontSize: 12,
    marginVertical: 4,
    fontWeight: 300,
    color: '#FFFFFF',
  },
});
