import React from 'react';
import FoodMenu from './foodMenu';
import Logo from '../../../assets/images/GLogo.png';
import Search from '../../../assets/images/Search.png';
import Delivery from '../../../assets/images/Pickup/DeliveryGraphic.png';
// import Collection from '../../../assets/images/Pickup/CollectGraphic.png';
import {StyleSheet, Text, View, Image, Alert, Pressable} from 'react-native';

const homePage = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image style={styles.logo} source={Logo}></Image>
          <Image style={styles.search} source={Search}></Image>
        </View>

        <View style={styles.container}>
          <View style={styles.divColumn}>
            <Text style={styles.h4}> You are ordering from </Text>
            <Text style={styles.h2}> Genesis Woji Branch </Text>
            <View style={styles.divRow}>
              <Text style={styles.h4}>To</Text>
              <View style={styles.ballSeperator}></View>
              <Text style={styles.h4}>Address of user</Text>
            </View>
          </View>

          <View style={styles.divColumn}>
            <Image style={styles.graphic} source={Delivery}></Image>
            <View style={styles.toggleContainer}>
              <Pressable
                style={styles.selectedToggle}
                onPress={() => Alert.alert('Toggle clicked!')}>
                <Text style={{color: '#FFF'}}>Delivery</Text>
              </Pressable>
              <Pressable style={styles.unselectedtoggle}>
                <Text style={{color: '#000'}}>Collection</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.divRow}>
            <FoodMenu />
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
    alignItems: 'center',
    backgroundColor: '#111213',
  },

  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF50',
  },

  divColumn: {
    display: 'flex',
    marginVertical: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FF00FF40',
  },

  divRow: {
    display: 'flex',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FF00FF40',
  },

  ballSeperator: {
    width: 4,
    height: 4,
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

  toggleContainer: {
    display: 'flex',
    gap: 4,
    marginTop: 18,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2D7AE',
  },

  unselectedtoggle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 100,
    elevation: 3,
    color: '#000',
    backgroundColor: '#E2D7AE',
  },

  selectedToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: '#FF0000',
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

  h4: {
    fontSize: 16,
    fontWeight: 300,
    color: '#FFFFFF',
    // backgroundColor: '#FF000050',
  },
});

export default homePage;
