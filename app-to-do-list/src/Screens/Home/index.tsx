import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const Home = ({navigation}) => {

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MiniApp')}>
              <Text style={styles.textButton}>To do List</Text>
          </TouchableOpacity>
      </View>   
  )
}

const styles = StyleSheet.create({
    container: {
      flex:  1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      position: 'absolute',
      top: 32,
      fontSize: 32,
      color: '#000',
    },
    button: {
      padding: 24,
      paddingHorizontal: 50,
      backgroundColor: '#000',
      borderRadius: 16,
    },
    textButton: {
      color: '#fff',
      fontSize: 16,
    }
})

export default Home;

