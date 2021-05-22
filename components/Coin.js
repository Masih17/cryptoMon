import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Coin(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black", backgroundColor: "yellow" }}>
        Welcome to Coin Page!!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#ed34e7",
    flex: 1,
    flexDirection: "row", 
    backgroundColor: "yellow",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Coin;
