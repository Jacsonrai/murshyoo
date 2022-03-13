import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import NewArrival from "./NewArrival";
import Popular from "./Popular";
import Recommended from "./Recommended";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <StatusBar backgroundColor="pink" />
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 25,
          padding: 10,
          fontWeight: "bold",
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
          letterSpacing: 2,
        }}
      >
        MURSHYOO
      </Text>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.homeContainer}>
          <View style={styles.searchContainer}>
            <AntDesign
              name="search1"
              size={24}
              color="gray"
              style={{
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                marginLeft: 10,
                backgroundColor: "white",
                justifyContent: "center",
                padding: 2,

                elevation: 2,
                shadowColor: "#52006A",
              }}
            />
            <TextInput placeholder="search" style={styles.searchText} />
          </View>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                New Arrival
              </Text>
              <NewArrival navigation={navigation}/>
            </View>
          </ScrollView>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                Popular
              </Text>
              <Popular navigation={navigation} />
            </View>
          </ScrollView>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                Recommended
              </Text>
            </View>
          </ScrollView>
          <Recommended navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "pink",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.1,
    height: 50,
    elevation: 1,
    shadowColor: "#52006A",
  },
  searchText: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    backgroundColor: "white",
    width: "70%",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 5,
    shadowColor: "#520023",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryText: {
    margin: 10,
    fontSize: 16,
    color: "#a9a9a9",
    fontWeight: "bold",
  },
  selectedCategory: {
    color: "gray",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
export default HomeScreen;
