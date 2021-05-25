import React from "react";
import Favorites from "./Favorites";
import CoinList from "./CoinList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            alignItems: "center",
            position: "absolute",
            backgroundColor: "#000",
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="CoinList"
          component={CoinList}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  style={{ color: focused ? "#20fc03" : "#ababab" }}
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
                    color: focused ? "#20fc03" : "#ababab",
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
