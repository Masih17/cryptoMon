import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import CoinList from "./components/CoinList";
import Coin from './components/Coin';


const THEME_COLOR = "black";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle="light-content" />
        <CoinList />
        <Coin />
      </SafeAreaView>
    </>
  );
}

///////////////////////////////////////////

const styles = StyleSheet.create({

  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});
