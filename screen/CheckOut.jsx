import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("screen").width / 2 - 100;



const CheckOut = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "gray",
          width: width,
          marginTop: 10,
          borderRadius: 4,
          marginLeft: 6,
        }}
        onPress={() => navigation.navigate("screen2")}
      >
        <Text
          style={{
            padding: 5,
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
      <View style={styles.checkoutContainer}>
        <Text style={styles.title}>Checkout-Murshyoo</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTexxt}>Total: 23000</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Shipping Address</Text>
          <View style={styles.mainFormContainer}>
            <TextInput placeholder="Name" style={styles.inputText} />
            <TextInput placeholder="Address" style={styles.inputText} />
            <TextInput placeholder="City" style={styles.inputText} />
            <TextInput placeholder="Phone No" style={styles.inputText} />
            {/* <TouchableOpacity
              style={{
                backgroundColor: "gray",
                width:"100%",
                marginTop: 10,
                borderRadius: 4,
                marginLeft: 6,
              }}
             
            >
              <Text
                style={{
                  padding: 5,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
               SUBMIT
              </Text>
            </TouchableOpacity> */}
            <Button title="submit" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  inputText: {
    fontSize: 20,
    color: "gray",
    paddingLeft: 5,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
  },
  mainFormContainer: {
    padding: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  infoTexxt: {
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
    color: "gray",
  },
  checkoutContainer: {
    padding: 10,
  },
});
export default CheckOut;
