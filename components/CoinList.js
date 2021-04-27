import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import axios from 'axios';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const api_url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

  const fetchData = () => {
    return fetch(api_url).then((response) =>
      response
        .json()
        .then((data) => {
          setCoins(data), console.log(data);
        })
        .catch((error) => console.log(error))
    );
  }; //end of fetch

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className={styles.coinContainer}>
      <FlatList
        data={coins}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>
            {item.name} ({item.symbol})
          </Text>
        )}
      />
    </View>
  );
} //end of CoinsList
export default CoinList;
///////////////////////////////////////////

const styles = StyleSheet.create({
  coinContainer: {
    padding: 10,
    marginVertical: 10, //space between each container
    borderWidth: 5,
    borderColor: 'red',
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
});
