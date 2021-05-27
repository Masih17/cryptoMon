import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import styles from "../styles/favoritesStyles";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

function Favorites({ navigation }) {
  const [favoritesList, setFavoritesList] = useState([]);
  const [formattedData, setFormattedData] = useState([]);

  const isFocused = useIsFocused();
  //console.log("isFocused is: ", isFocused);

  const initDB = () => {
    //console.log("initDB is called");
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.database().ref("favorites/");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      updateDB();
      initDB();
      // alert("Home Screen was focused");
      // return () => {
      //   // Do something when the screen is unfocused
      //   alert("Home Screen was unfocused");
      // };
    }, [])
  );

  const updateDB = () => {
    //console.log("updateDB is called");
    firebase
      .database()
      .ref("favorites/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        //console.log("data in snapshot.val is: ", data);
        if (data == null) {
          alert("nothing to show");
        } else {
          setFavoritesList(data);
          formatData(favoritesList);
        }
      });
  };

  const formatData = (data) => {
    let arr = [];
    let test = Object.values(data).forEach((o) => {
      Object.values(o).forEach((a) =>
        Object.values(a).forEach((b) => arr.push(b))
      );
      setFormattedData(arr);
    });

    console.log("formatted data in formateData function is: ", formattedData);
    //console.log("formattedData in formatData() is: \n", formattedData.length);
  };

  // const formatData = (data) => {
  //   //console.log("data in the beginning is: ", data);
  //   let arr = [];
  //   var test = Object.values(data).map((v) => {
  //     for (v in data) {
  //       console.log("Object.values(data[v])", Object.values(data[v]));
  //       //arr.push(Object.values(data[v]));
  //     }
  //   });
  //   //setFormattedData(arr);
  // };

  // const formatData = (data) => {
  //   // console.log("formatData is called");
  //   let arr = [];
  //   Object.keys(data).map((key) => {
  //     for (key in data) {
  //       for (const v in data[key]) {
  //         for (const final in data[key][v]) {
  //           arr.push([data[key][v]]);
  //           //console.log("const final in data[key][v]", data[key][v]);
  //         }
  //       }
  //     }
  //   });
  //   console.log("arr is", arr);
  //   setFormattedData(arr);
  // };

  return (
    <View style={styles.body}>
      <View>
        {/* <FlatList
          data={formattedData}
          keyExtractor={(item, index) => {
            item.id;
          }}
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
                <Text>{item.id}</Text>
              </View>
            </View>
          )}
        /> */}
        <Text styles={{ color: "#000" }}> HELLO</Text>
      </View>
    </View>
  );
}
export default Favorites;
