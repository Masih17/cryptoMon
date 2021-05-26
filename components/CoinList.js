import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styles from "../styles/coinListStyles";
import Favorites from "./Favorites";
import filter from "lodash.filter";
import axios from "axios";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);
  const [favorites, setFavorite] = useState({ currFav: [], checked: [] });

  const API_URI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(API_URI)
      .then((res) => {
        setCoins(res.data);
        setFullData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error in axios", error);
      });
  };

  //coin list from CoinGecko
  useEffect(() => {
    fetchData();
  }, []);

  // To handle the searches
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (data) => {
      return contains(data, formattedQuery);
    });
    setCoins(filteredData);
    setQuery(text);
  };

  // to filter the search by these parameter of the data in the API
  const contains = ({ symbol, id, name }, query) => {
    if (symbol.includes(query) || id.includes(query) || name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleFavorite = (i, e) => {
    const { currFav, checked } = favorites;
    checked[i] = !checked[i];
    const found = currFav.some((data) => data === e);
    if (found) {
      currFav.splice(
        currFav.findIndex((data) => data === e),
        1
      );
    } else {
      currFav.push(e);
    }
    setFavorite({ currFav, checked });
  };

  const handlePress = (data) => {
    let checkFiledData = {};
    let names = [];
  };

  return (
    <View style={styles.body}>
      {/*//////////////// SearchBar ////////////// */}
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          placeholderTextColor="#fefefe"
          style={styles.searchBox}
        />
      </View>

      {/*//////////////// FlatList////////////// */}
      {isLoading ? (
        <ActivityIndicator animating size="small" />
      ) : (
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 80 }} //padding to make the last item fir in screen
          ///////// Pull to refresh //////////

          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
          }
          style={styles.flatListBody}
          //////// rendering items ///////////

          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handlePress(coins)}>
              <View style={styles.flatListBox}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.icon}
                />

                <View style={styles.flatListContainerItems}>
                  {/******  Name and Symbol *********/}
                  <View>
                    <Text style={styles.coinName}>{item.name}</Text>
                    <Text style={styles.coinAcr}>
                      {item.symbol.toUpperCase()}
                    </Text>
                    {/********* CheckBox **************/}
                    <View>
                      <Pressable>
                        <CheckBox
                          checked={favorites.checked[index]}
                          onPress={() => handleFavorite(index, item)}
                          containerStyle={styles.favoriteIcon}
                          checkedIcon={
                            <AntDesign
                              name="heart"
                              size={18}
                              color={"#F44336"}
                            />
                          }
                          uncheckedIcon={
                            <AntDesign name="hearto" size={18} color={"#fff"} />
                          }
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.data}>
                    <Text style={styles.price}></Text>
                  </View>
                  {/******  Price and Percentage *********/}

                  <View style={styles.priceData}>
                    <Text style={styles.price}>
                      €{item.current_price.toFixed(2).replace(".", ",")}
                    </Text>
                    <Text
                      // Checking if the percentage is up or down and change color base on that
                      style={[
                        item.price_change_percentage_24h_in_currency > 0
                          ? styles.up
                          : styles.down,
                      ]}
                    >
                      {item.price_change_percentage_24h_in_currency
                        .toFixed(2)
                        .replace(".", ",") + "%"}
                    </Text>
                    <Text
                      style={[
                        item.price_change_percentage_1h_in_currency > 0
                          ? styles.up
                          : styles.down,
                      ]}
                    >
                      {item.price_change_percentage_1h_in_currency
                        .toFixed(2)
                        .replace(".", ",") + "%"}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <Favorites data={favorites.currFav} handleFavorite={handleFavorite} />
    </View>
  );
}

export default CoinList;
