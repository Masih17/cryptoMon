import { StyleSheet, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const SPACING = 20;
const ICON_SIZE = 40;

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000",
  },

  searchBox: {
    flexDirection: "row",
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
    //backgroundColor: "#000",
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 24,
    // borderWidth: 2,
    // borderColor: "#ed34e7",
  },

  flatListBox: {
    flexDirection: "row",
    padding: SPACING,
    paddingLeft: SPACING / 2,
    paddingRight: SPACING / 2,
    marginBottom: SPACING / 4,
    backgroundColor: "rgba(59, 56, 74, 0.8)", // "rgba(43, 36, 79, 0.8)",
    borderRadius: 12,
    // borderColor: "#18fa14",
    // borderWidth: 2,
  },

  favoriteIcon: {
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 0,
    marginLeft: 0,
  },

  flatListContainerItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "#ed34e7",
  },

  coinAcr: {
    color: "#fff",
    // borderColor: "#d8eb34",
    // borderWidth: 2,
  },
  coinName: {
    color: "#fff",
    fontWeight: "bold",
    // borderColor: "#a19fd4",
    // borderWidth: 2,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE,
    marginRight: 10,
  },

  price: {
    color: "#fff",
    fontWeight: "bold",
    margin: 2,
  },

  priceData: {
    alignItems: "flex-end", // Percentage to the most right
    // borderColor: "#fff",
    // borderWidth: 2,
    //maxWidth: "100%",
  },

  up: {
    color: "#45e600",
    padding: 1,
    //alignSelf: "flex-end",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  down: {
    color: "#ff2626",
    //alignSelf: "flex-end",
    padding: 1,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});
