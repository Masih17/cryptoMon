import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CoinList from './components/CoinList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='yellow' />
      <Text style={styles.text}>Welcome to cryptoMon!</Text>
      <CoinList></CoinList>
    </SafeAreaView>
  );
}

///////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 2,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});
