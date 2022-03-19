import React from "react";
import {
  Text,
  ImageBackground,
  View,
  StatusBar,
  TouchableOpacity,
  Linking
} from "react-native";
import { Alert } from "react-native-web";

const ModelsDetails = ({ route, navigation }) => {
  console.log(route.params);
  const { img, name, desc, email } = route.params;
  const openUrl=async(url)=>{
      const isSupported=await Linking.canOpenURL(url);
      if(isSupported){
          await Linking.openURL(url)
      }
      else{
          alert('Contact unavailable now')
      }

  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 1 }} source={img}>
        <View
          style={{
            height: "50%",
            bottom: 0,
            width:"100%",
            position: "absolute",
            paddingHorizontal: 40,
            backgroundColor:"gray",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            opacity:0.7
          }}
        >
          <Text style={{letterSpacing:2, color: "#F2A9BE", fontSize: 32, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              lineHeight: 15,
              marginTop: 6,
            }}
          >
            {desc}
          </Text>
          <Text style={{ color: "#F2A9BE",letterSpacing:2, fontWeight: "bold", marginTop: 5 }}>
            {email}
          </Text>
          <TouchableOpacity
          onPress={()=>Linking.openURL(`mailto:${email}`)}
            style={{
              backgroundColor: "#F2A9BE",
              marginTop: 10,
              width: "50%",
              borderRadius: 20,
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                padding: 5,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ModelsDetails;
