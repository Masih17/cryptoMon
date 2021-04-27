import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CoinList from './components/CoinList';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' backgroundColor='yellow' />
      <Text style={styles.text}>Welcome to cryptoMon!</Text>
      <CoinList />
    </SafeAreaView>
  );
}

///////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 10,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});
