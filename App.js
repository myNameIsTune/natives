import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewone}>
      </View>
      <View style={styles.viewtwo}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewone:{
    flex:2,
    backgroundColor:'red'
  },
  viewtwo:{
    flex:1,
    backgroundColor:'blue'
  }

});
