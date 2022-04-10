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
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

const width = Dimensions.get("screen").width / 2 - 100;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../utlis/endpoint";
import ImageUpload from "../component/ImageUpload/ImageUpload";

const CheckOut = ({ route, navigation }) => {
 
console.log(BASE_URL)
  const payload = route.params;
  console.log(route.params)
  const [image, setImage] = useState(null);
  const [names, setName] = useState("");
  const [addresss, setAddress] = useState("");
  const [contacts, setContact] = useState("");
  const [token, setToken] = useState("");
 
  useEffect(() => {
    AsyncStorage.getItem("token").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result));
      } else {
        setToken(null);
      }
    });
  }, []);
  const handleSubmit = async () => {
    let name = names;
    let address = addresss;
    let contact = contacts;
    const formData = new FormData();
    formData.append("studentPicture", {
      name: "_studentPicture",
      uri: image,
      type: "image/*",
    });
    formData.append("name",name)
    formData.append("address",address)
    formData.append("contact",contact)
    formData.append("orderItems",JSON.stringify(payload))

    try {
      fetch(`${BASE_URL.api}/api/order/createorder`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          
        },
        body:formData

        // body: JSON.stringify({
        //   name,
        //   contact,
        //   address,
        //   formData,

        //   orderItems: {
        //     payload,
        //   },
        // }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            console.log(responseJson);
          }
          if (responseJson.message) {
            console.log("orders", responseJson);
            alert("ITEM IS ORDER");
            navigation.navigate("screen2");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <View style={styles.checkoutContainer}>
        <Text style={styles.title}>Checkout-Murshyoo</Text>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Shipping Address</Text>
          <View style={styles.mainFormContainer}>
            <TextInput
              placeholder="Name"
              onChangeText={(e) => setName(e)}
              style={styles.inputText}
            />
            <TextInput
              placeholder="Billing Address"
              onChangeText={(e) => setAddress(e)}
              style={styles.inputText}
            />
            <TextInput
              placeholder="Phone No"
              onChangeText={(e) => setContact(e)}
              style={styles.inputText}
            />
            <ImageUpload data={image} onPress={handleImage} />
            <Button
              title="Place Order"
              onPress={() => handleSubmit()}
              color="#F2A9BE"
            />
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
    paddingLeft: 10,
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
