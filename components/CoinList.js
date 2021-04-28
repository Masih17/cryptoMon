import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Animated,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  SafeAreaViewBase,
  TouchableOpacity,
  Easing,
  TextInput,
} from 'react-native';

import filter from 'lodash.filter';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');
const SPACING = 20;
const ICON_SIZE = 40;

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const API_URI =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

  //coin list from CoinGecko
  useEffect(() => {
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
        console.log('Error in axios', error);
      });
  }, []);

  // To handle the search bar.
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (symbol) => {
      return contains(symbol, formattedQuery);
    });
    setCoins(filteredData);
    setQuery(text);
  };

  const contains = ({ symbol, id, name }, query) => {
    if (symbol.includes(query) || id.includes(query) || name.includes(query)) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        clearButtonMode='always'
        value={query}
        onChangeText={handleSearch}
        placeholder='Search'
        style={styles.searchBox}
      />
      {isLoading ? (
        <ActivityIndicator animating size='large' />
      ) : (
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => alert('Item pressed!')}>
              <View style={styles.flatListItems}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: styles.image.width,
                    height: styles.image.height,
                    borderRadius: styles.image.borderRadius,
                    marginRight: styles.image.marginLeft,
                  }}
                />
                <View>
                  <Text style={styles.coinName}>{item.name}</Text>
                  <Text style={styles.text}>{item.symbol.toUpperCase()}</Text>
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
  container: {
    backgroundColor: 'black',
  },
  flatListItems: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING / 2,
    backgroundColor: 'rgba(59, 56, 74, 0.8)',
    borderRadius: 12,
  },
  text: { color: 'white' },
  coinName: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    // Crypto icon sizes
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE,
    marginLeft: 10,
  },
  searchBox: {
    padding: SPACING,
    marginBottom: SPACING / 4,
    margin: SPACING,
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 40,
    borderColor: 'red',
    borderWidth: 6,
    color: 'red',
  },
});

export default CoinList;
