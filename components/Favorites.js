import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";

function Favorites({ favorites }) {
  //const [favorite, setFavorite] = useState([]);

  console.log("favorites in Favorite Component is: ", favorites);
  // console.log("Navigation in Favorite Component is: ", navigation);

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
