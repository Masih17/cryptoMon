import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";

function Favorites({ favorites }) {
  //console.log("navigation in Favorite component is: ", favorites);

  //const [data, setData] = useState(favorites);

  //console.log(favorites);
  return (
    <View style={styles.body}>
      {/* <View>
        <FlatList
          data={data}
          keyExtractor={(item) => "favorites_" + item.id}
          style={styles.flatListBody}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.icon}
            />
          )}
        />
      </View> */}
    </View>
  );
}

export default Favorites;
