import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";
import { useIsFocused } from "@react-navigation/native";

function Favorites({ data }) {
  //console.log(props);

  const [favorites, setFavorite] = useState(data);
  const isFocused = useIsFocused();

  useEffect(() => {
    setFavorite(data);
    console.log("data in Favorite Component is: ", data);
  }, [isFocused]);

  console.log("favorites in Favorite Component is: ", favorites);
  // console.log("Navigation in Favorite Component is: ", navigation);

  return (
    <View style={styles.body}>
      <View>
        {/* <FlatList
          data={favorites}
          keyExtractor={(item) => "Favorites_" + item.id}
          contentContainerStyle={{ paddingBottom: 80 }}
          style={styles.flatListBody}
          renderItem={({ item, index }) => (
            <View style={styles.flatListBox}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.icon}
              />
              <View>
                <Text>HELLO</Text>
              </View>
            </View>
          )}
        /> */}
        <View>
          <Text>{JSON.stringify(favorites)}</Text>
        </View>
      </View>
    </View>
  );
}
export default Favorites;
