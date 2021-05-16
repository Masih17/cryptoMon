import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchServices from "./FetchServices";

function Coin(props) {


  return (
    <View style={styles.container}>
      <Text>Welcome to Coin Page</Text>
      <Text>{props.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1,
    alignSelf: "stretch",
    flexDirection: "row", // row
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Coin;
