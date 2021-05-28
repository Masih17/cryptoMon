import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Tabs from "./components/Tabs";

const THEME_COLOR = "#000";

export default function App() {
  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <StatusBar barStyle="light-content" />
      <Tabs />
    </SafeAreaView>
  );
}

///////////////////////////////////////////

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});
