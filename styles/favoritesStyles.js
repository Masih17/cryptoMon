import { StyleSheet, StatusBar, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const SPACING = 20;
const ICON_SIZE = 40;

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#34e7",
  },

  flatListBody: {
    backgroundColor: "#fe1",
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 24,
    // borderWidth: 2,
    // borderColor: "#ed34e7",
  },
  flatListBox: {
    flex: 1,
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
  flatListContainerItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "#ed34e7",
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE,
    marginRight: 10,
  },
});
