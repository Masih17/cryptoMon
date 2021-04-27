import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const api_url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

  // const fetchData = () => {
  //   return fetch(api_url).then((response) =>
  //     response
  //       .json()
  //       .then((data) => {
  //         setCoins(data), console.log(data);
  //       })
  //       .catch((error) => console.log(error))
  //   );
  // }; //end of fetch

  // <View className={styles.coinContainer}>
  //   <FlatList
  //     data={coins}
  //     keyExtractor={(item) => item.id}
  //     renderItem={({ item, index }) => (
  //       <View>
  //         <Text>
  //           {item.name}, ({item.symbol})
  //         </Text>
  //       </View>
  //     )}
  //   />
  //   <Text>HELLO FROM CoinList</Text>
  // </View>;

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log('Error in axios', error));
  }, []);

  return (
    <View style={styles.coinContainer}>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item.image }}
              style={{
                width: styles.iconSize.width,
                height: styles.iconSize.height,
                borderRadius: styles.iconSize.borderRadius,
              }}
            />
            <View>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.symbol}</Text>
              <Text style={styles.text}>{item.id}</Text>
            </View>
          </View>
        )}
      />
      <Text>HELLO FROM CoinList</Text>
    </View>
  );
} //end of CoinsList

///////////////////////////////////////////

const styles = StyleSheet.create({
  coinContainer: {
    marginLeft: 20,
    backgroundColor: 'black',
  },
  text: { color: 'white' },
  iconSize: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});

export default CoinList;
