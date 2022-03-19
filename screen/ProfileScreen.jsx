import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "../component/Button/Button";
import {useContext}from 'react'
import AuthContext from "../component/Context/AuthContext";

const width = Dimensions.get("screen").width / 3;
const ProfileScreen = ({navigation}) => {
  const{signout}=useContext(AuthContext)
  const handleLogout=()=>{
    signout()
    AsyncStorage.removeItem('token').then((result)=>{}).catch((err)=>{
      console.log(err)
    
    })
    
   
    }
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: width, height: 60 }}
          source={require("../assets/v.png")}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 17, fontWeight: "bold",color:"white", letterSpacing: 2,textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,}}>
          MURSHYOOOO
        </Text>
        <Text style={{ color: "gray", letterSpacing: 2 }}>Clothing..</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "pink",
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            letterSpacing:4,
            textShadowColor: "pink",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
           
            
        
          }}
        >
          Account
        </Text>
        <View style={styles.accountContainer}>
          
          <View style={styles.btnContainer}>
            <AppButton title="Wishlist" />
          </View>
          <View style={styles.btnContainer}>
            <AppButton title="Address"/>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <AppButton title="Logout" onPress={()=>handleLogout(navigation)}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "pink",
    flex:1
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
    padding: 10,
  },
  detailContainer: {
    backgroundColor: "white",
    flex:1,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
   
  },
  accountContainer: {
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "gray",
  },
  btnContainer: {
    marginBottom: 10,
  },
  logoutContainer:{
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    backgroundColor:"white"
  }
});
export default ProfileScreen;
