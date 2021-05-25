import { StyleSheet, StatusBar, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const SPACING = 20;
const ICON_SIZE = 40;

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000",
  },

  container: {
    flexDirection: "row",
    color: "#34e7",
    backgroundColor: "#34e7",
    paddingLeft: 10,
    paddingRight: 10,
  },

  flatListBody: {
    //backgroundColor: "#000",
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 24,
    // borderWidth: 2,
    // borderColor: "#ed34e7",
  },
});
