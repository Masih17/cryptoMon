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
  Button,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "../styles/styles";
import Coin from "./Coin";

import filter from "lodash.filter";
import axios from "axios";

function CoinList({ navigate }) {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [favorite, setFavorite] = useState({ item: {}, isSelected: false });


  const API_URI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

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
    //console.log("filteredData is: ", filteredData);
    setCoins(filteredData);
    setQuery(text);
  };

  // to filter the search by these parameter of the data in the API
  const contains = ({ symbol, id, name }, query) => {
    //console.log("****The object is: ", query);
    if (symbol.includes(query) || id.includes(query) || name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleFavorite = (e) => {
    //console.log(e);
    //setIsSelected(true);
    //setFavorite(...favorite, e);
    // console.log(isSelected);
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
          //initialNumToRender={15} //Not sure if this is working or not
          keyExtractor={(item) => item.id}
          ///////// Pull to refresh //////////

          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
          }
          style={styles.flatListBody}
          //////// rendering items ///////////

          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress({ item })}>
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
                    <View style={styles.favoriteIcon}>
                      <Pressable>
                        <AntDesign
                          name={favorite ? "hearto" : "hearto"}
                          value={isSelected}
                          size={16}
                          color={isSelected ? "#F44336" : "rgb(255, 255, 0)"}
                          selectable={true}
                          onPress={() => handleFavorite(item.id)}
                        />
                      </Pressable>
                    </View>
                  </View>

                  {/******  Price and Percentage *********/}

                  <View style={styles.priceData}>
                    <Text style={styles.numbers}>
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
    </View>
  );
}

export default CoinList;
