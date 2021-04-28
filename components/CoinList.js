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
  const [icon, setIcon] = useState('');
  // const [iconUri, setIconUri] = useState('');
  // const icon_url = `https://cryptoicons.org/api/icon/${icon}/200`;
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
    //coin list from CoinGecko
    axios
      .get(api_url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log('Error in axios', error));
  }, []);

  // fetching Cryptocurrency Icon
  // const fetchIcons = (cryptoName) => {
  //   axios
  //     .get(`https://cryptoicons.org/api/icon/${cryptoName}/200`)
  //     .then((res) => {
  //       setIcon(res);
  //     })
  //     .catch((error) => console.log('Error in icon fetch', error));
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.flatListItems}>
            <Image
              source={{
                //uri: `https://cryptoicons.org/api/icon/${item.symbol}/200`,
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
        )}
      />
      <Text>HELLO FROM CoinList</Text>
    </View>
  );
} //end of CoinsList

///////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'red',
  },
  flatListItems: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'red',
    borderRadius: 16,
  },
  text: { color: 'white' },
  coinName: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    // Crypto icon sizes
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
  },
});

export default CoinList;
