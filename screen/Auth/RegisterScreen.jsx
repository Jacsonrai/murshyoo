import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicato
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState} from "react";

const width = Dimensions.get("screen").width / 2;
const height = Dimensions.get("screen").height / 7;

const baseUrl = "";

const RegisterScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  


 

  const onSubmitForm=async(event)=>{
    
      setIsLoading(true)
      let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify({
              email,
              address,
              contact,
              name,
              password

        }),
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
         
        }
      }
      try{
        fetch("http://192.168.10.65:8000/api/signup",data).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.error){
            alert(responseJson.error)
          }
          if(responseJson.message){
            alert(responseJson.message)
          }
          if(responseJson.user){
            alert(responseJson.user)
          }
        setIsLoading(false)
        })
        .catch((error) => {
         console.log(error)
          setIsLoading(false)
        });
    

      }catch(err){
        console.log("error",error)
      }
     

  }

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
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 3,
              color: "pink",
              textShadowColor: "pink",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            LETS SIGN YOU UP!
          </Text>
          <View style={styles.mainFormContainer}>
            <TextInput
              value={name}
              placeholder="Name"
              style={styles.inputText}
              onChangeText={(e) => setName(e)}
              editable={!isLoading}
            />
            <TextInput
              placeholder="Address"
              style={styles.inputText}
              value={address}
              onChangeText={(e) => setAdress(e)}
              editable={!isLoading}
            />
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
            <TextInput 
            placeholder="Contact" 
            style={styles.inputText}
            value={contact} 
            onChangeText={(e)=>setContact(e)}/>
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                width: 100,
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={onSubmitForm}
              disabled={isLoading}
            >
              <Text
                style={{
                  color: "white",
                  padding: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {isLoading ? "..loading" : "Sign Up"}
              </Text>
            </TouchableOpacity>
            
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "gray" }}>
                Already have Account?
              </Text>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigation.navigate("login")}
              >
                <Text
                  style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 10,
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
    padding: 40,
  },
  title: {
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
    fontSize: 25,
    color: "white",
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

export default RegisterScreen;
