import { StyleSheet } from "react-native";

const globalStyles = {
  fontFamily: "Rubik",
  darkGrey: "#78746D",
  lightGrey: "#D5D4D4",
  headerBlack: "#3C3A36",
  purple: "#82327E",
  lightBlue: "#65AAEA",
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#EDDFBC",
  },
  container: {
    flex: 1,

    width: "85%",

    justifyContent: "space-around",
  },
  skipLink: {
    marginTop: 20,
    alignSelf: "flex-end",

    fontFamily: globalStyles.fontFamily,
    fontWeight: "bold",
    fontSize: 14,
    color: globalStyles.darkGrey,
  },
  mainSection: {
    height: "55%",
    alignItems: "center",
  },

  image: {
    height: 160,
    resizeMode: "contain",
  },
  header: {
    marginTop: 20,
    maxHeight: 60,
    justifyContent: "center",

    fontFamily: globalStyles.fontFamily,
    fontSize: 24,
    fontWeight: "bold",
    color: globalStyles.headerBlack,
    textAlign: "center",
  },
  description: {
    marginTop: 20,
    height: 60,

    fontFamily: globalStyles.fontFamily,
    fontSize: 14,
    color: globalStyles.darkGrey,
    textAlign: "center",
  },
  stepsContainer: {
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepIndicator: {
    height: 6,
    width: 6,
    backgroundColor: globalStyles.lightGrey,
  },
  currentStep: {
    height: 6,
    width: 16,
    backgroundColor: globalStyles.lightBlue,
    borderRadius: 4,
  },
});

export default styles;
