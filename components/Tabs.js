import React from "react";
import Favorites from "./Favorites";
import CoinList from "./CoinList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from '../styles/styles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          // flex:1,
          // flexDirection: 'row',
          // alignContent: 'center',
          // justifyContent: 'center',
          alignItems: "center",
          position: "absolute",
          backgroundColor: "#000",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="CoinList"
        component={CoinList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Feather
                style={{ color: focused ? "#20fc03" : "#ababab"}}
                name="list"
                size={28}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Coin"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="favorite"
                size={28}
                style={{
                  color: focused ? "#20fc03" : "#ababab"
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
