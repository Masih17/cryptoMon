import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function Favorites() {
  //const [favorite, setFavorite] = useState([]);

  // console.log("favorites in Favorite Component is: ", favorites);
  // console.log("Navigation in Favorite Component is: ", navigation);

  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>
        {/* {JSON.stringify(favorites)}  Hello */} HELLO
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

export default Favorites;
