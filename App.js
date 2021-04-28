import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CoinList from './components/CoinList';

const THEME_COLOR = 'black';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle='light-content' />
        <CoinList />
      </SafeAreaView>
    </>
  );
}

///////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});
