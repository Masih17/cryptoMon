import { StyleSheet, StatusBar,Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const SPACING = 20;
const ICON_SIZE = 40;

export default StyleSheet.create({

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
    borderColor: "#18fa14",
    borderWidth: 2,
  },

  flatListContainerItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#ed34e7",
  },

  coinAcr: {
    color: "#ffffff",
    // borderColor: "#d8eb34",
    // borderWidth: 2,
  },
  coinName: {
    color: "#ffffff",
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

  numbers: {
    color: "#ffffff",
  },

  priceData: {
    alignItems: "flex-end", // Percentage to the most right
    borderColor: "#fff",
    borderWidth: 2,
    //maxWidth: "100%",
  },

  up: {
    color: "#45e600",
    //alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  down: {
    color: "#c82a42",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
});
