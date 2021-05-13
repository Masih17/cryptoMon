import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';

import filter from "lodash.filter";
import axios from "axios";

const { width, height } = Dimensions.get("screen");
const SPACING = 20;
const ICON_SIZE = 40;

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);

  const API_URI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5000&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

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
    const filteredData = filter(fullData, (x) => {
      //console.log("filteredData is: ", filteredData);
      return contains(x, formattedQuery);
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

  /////////////////////////////// VIEW ////////////////////////////////

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
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert("Item pressed!")}>
              <View style={styles.flatListBox}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.icon}
                />
                <View style={styles.flatListContainerTexts}>
                  {/******  Name and Symbol *********/}
                  <View>
                    <Text style={styles.coinTitle}>
                      {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    </Text>
                    <Text style={styles.coinSymbol}>
                      {item.symbol.toUpperCase()}
                    </Text>
                  </View>
                  {/******  Price and Percentage change in 24H *********/}
                  <View style={styles.coinPriceBox}>
                    <Text style={styles.price}>
                      €{item.current_price.toFixed(2).replace(".", ",")}
                    </Text>
                    <Text
                      // Checking if the percentage is up or down and change color base on that
                      style={[
                        item.price_change_percentage_24h_in_currency >= 0
                          ? styles.percentageUp
                          : styles.percentageDown,
                      ]}
                    >
                      {(item.price_change_percentage_24h_in_currency).toFixed(1) +
                        " %"}
                    </Text>
                    {/* To the end of flex*/}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <Text>HELLO FROM CoinList</Text>
    </View>
  );
} //end of CoinsList

///////////////////////////////////////////

const styles = StyleSheet.create({
  searchBox: {
    color: "white",
    padding: SPACING,
    marginBottom: SPACING / 4,
    margin: SPACING,
    backgroundColor: "rgba(59, 56, 74, 0.8)",
    borderRadius: 12,
    //height: 40, If height is set, the color of the font don't work.
    //Like this the system takes care of it
    marginBottom: 10,
  },

  flatListBody: {
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 24,
  },
  flatListBox: {
    flexDirection: "row",
    color: "#ffffff",
    padding: SPACING,
    paddingLeft: SPACING / 2,
    paddingRight: SPACING / 2,
    marginBottom: SPACING / 4,
    backgroundColor: "rgba(43, 36, 79, 0.8)",
    borderRadius: 12,
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  flatListContainerTexts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "pink",
  },
  coinSymbol: {
    color: "#ffffff",
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  coinTitle: {
    color: "#ffffff",
    maxWidth: "100%",
    fontWeight: "bold",
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  icon: {
    // Icon sizes
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE,
    marginRight: 10,
  },

  coinPriceBox: {
    color: "#ffffff",
    // borderColor: "yellow",
    // borderWidth: 2,
    //alignSelf: "flex-start",
  },
  price: {
    color: "#ffffff",
    alignSelf: "flex-end",
  },
  percentageUp: {
    color: "#45e600",
    alignSelf: "flex-end",
  },
  percentageDown: {
    color: "#c82a42",
    alignSelf: "flex-end",
  },
});

export default CoinList;
