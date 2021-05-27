import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

function Favorites({ navigation }) {
  const [favoritesList, setFavoritesList] = useState([]);
  //console.log("favoriteList length is:", favoritesList);

  const initDB = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.database().ref("favorites/");
    }
  };

  useEffect(() => {
    const loadData = navigation.addListener("focus", () => {
      updateDB();
    });
    return loadData;
  }, [navigation]);

  useEffect(() => {
    initDB();
  });

  const updateDB = () => {
    firebase
      .database()
      .ref("favorites/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        if (data == null) {
          alert("nothing to show");
        } else {
          setFavoritesList(data);
        }
      });
  };

  return (
    <View style={styles.body}>
      <View>
        {/* <FlatList
          data={favoritesList}
          keyExtractor={(item) => +item.id}
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
          <Text>{JSON.stringify(favoritesList)} Hello</Text>
        </View>
      </View>
    </View>
  );
}
export default Favorites;
