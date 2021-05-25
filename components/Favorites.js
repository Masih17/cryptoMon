import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";

function Favorites({ favorites }) {
  const [favorite, setFavorite] = useState(favorites);

  console.log("favorites in Favorite Component is: ", favorite);
  // console.log("Navigation in Favorite Component is: ", navigation);
  return (
    <View style={styles.body}>
      <View>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
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
      </View>
    </View>
  );
}
export default Favorites;
