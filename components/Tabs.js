import React from "react";
import Coin from "./Coin";
import CoinList from "./CoinList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
          alignItems: 'center',
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
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Feather name="list" size={28} color="white" />
              {/* <Text style={{ color: focused ? '#ed34e7' : '#748c94', fontSize: 18}}> </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen name="Coin" component={Coin} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign name="areachart" size={28} color="white" />
              {/* <Text style={{ color: focused ? '#ed34e7' : '#748c94', fontSize: 18}}> </Text> */}
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
};

export default Tabs;