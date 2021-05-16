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
} from "react-native";
import styles from "./styles/styles";
import Coin from "./Coin";

// import { LinearGradient } from 'expo-linear-gradient';

import filter from "lodash.filter";
import axios from "axios";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);

  const API_URI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(API_URI)
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
        setFullData(res.data);
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
    console.log("text is: ", text);
    const formattedQuery = text.toLowerCase();
    // <<<<<<< HEAD
    //     const filteredData = filter(fullData, (x) => {
    //       //console.log("filteredData is: ", filteredData);
    //       return contains(x, formattedQuery);
    // =======
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

  const handlePress = (e) => {
    return <Coin data={e.id} />;
  };

  return (
    <View>
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

          renderItem={({ item, index }) => (
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
                      {item.price_change_percentage_24h_in_currency.toFixed(2) +
                        "%"}
                    </Text>
                    <Text
                      // Checking if the percentage is up or down and change color base on that
                      style={[
                        item.price_change_percentage_1h_in_currency > 0
                          ? styles.up
                          : styles.down,
                      ]}
                    >
                      {item.price_change_percentage_1h_in_currency.toFixed(2) +
                        "%"}
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
} //end of CoinsList

export default CoinList;
