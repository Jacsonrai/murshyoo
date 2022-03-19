import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AuthContext from "../../component/Context/AuthContext";
import{useContext}from 'react'

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


const width = Dimensions.get("screen").width / 2;
const height = Dimensions.get("screen").height / 7;

const LoginScreen = ({ navigation }) => {
  const{signin}=useContext(AuthContext)
  

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  

  const handleLogin =() => {
    
    signin(email,password)
  };
  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <View style={styles.loginContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/v.png")}
            style={{ width: width, height: height }}
            resizeMode="contain"
          />
          <Text style={styles.title}>Murshyoo</Text>
          <Text style={styles.subTitle}>Clothing</Text>
        </View>
        <View style={styles.formContainer}>
          <Text
            style={{
              padding: 10,
              textAlign: "center",
              fontWeight: "bold",
              color: "pink",
              fontSize: 25,
              letterSpacing: 3,
              textShadowColor: "pink",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            WELCOME
          </Text>
          <View style={styles.mainFormContainer}>
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.inputText}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                width: 100,
                alignItems: "center",
                borderRadius: 5,
              }}
              // onPress={() => navigation.navigate("dashboard")}
              onPress={handleLogin}
            >
              <Text
                style={{
                  color: "white",
                  padding: 10,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("sign")}
            >
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}>
                Create Account?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: 40,
  },
  inputText: {
    fontSize: 20,
    color: "gray",
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    width: width,
    borderRadius: 5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  mainFormContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 3,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    letterSpacing: 3,
    textAlign: "center",
    padding: 2,
  },
  formContainer: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default LoginScreen;
