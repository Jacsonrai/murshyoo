import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
const width=Dimensions.get("screen").width/2-30
const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.Image}
              source={require("../assets/v.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.loadingMainText}>
            <Text style={styles.logoTitle}>MURSHYOOO</Text>
            <Text style={styles.subTitle}>CLOTHING..</Text>
            <Text style={styles.infoText}>HAVE A GREATE DAY</Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer:{
    justifyContent:"center",
    alignItems:"center"
  },

  Image: {
   
    height: 100,
    width:width,
   
  },
  logoTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    letterSpacing: 2,
    color:"white"
  },
  subTitle: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
  },
  infoText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    letterSpacing: 2,
    color:"white"
  },
});
export default Loading;
