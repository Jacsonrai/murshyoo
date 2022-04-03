import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utlis/endpoint";
import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";
const width = Dimensions.get("screen").width / 1.5;

const CartList = ({ item, navigation }) => {
  console.log(item)
  const { _id, price, product, quantity } = item;
  const [token, setToken] = useState("");
  const [productDetails, setProductDetails] = useState();
 console.log(token)
  useEffect(() => {
    AsyncStorage.getItem("token").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result));
      } else {
        setToken(null);
      }
    });
    try {
      fetch(`${BASE_URL.api}/api/product/productdetails?id=${product}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setProductDetails(responseJson.data?.productPicture)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [product]);
  const handleDelete=async(product)=>{
    console.log(product)
    try{
      
      fetch(`${BASE_URL.api}/api/user/cart/removecartitem`,{
        method:"POST",
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({product})
      })
      .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
        .catch((err) => {
          console.log(err);
        });

    }catch{
      console.log(err);
    }
  
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          source={{uri:`${productDetails}`,height:80,width:100}}
          style={{borderRadius:10}}
          resizeMode="contain"
       
        />
      </View>
   
        <View style={{alignItems:"center"}}>
          <Text>Quantity</Text>
          <Text style={{ fontSize: 20 }}>{quantity}</Text>
        </View>

        <View style={{alignItems:"center",marginHorizontal:40}}>
          <Text>Price</Text>
          <Text style={{ fontSize: 20 }}>Rs {price}</Text>
        </View>
        <View style={{backgroundColor:"white",padding:1,borderRadius:50,height:35,width:35,alignItems:"center",justifyContent:"center"}}>
        <AntDesign onPress={()=>handleDelete(product)} name="delete" size={24} color="gray" />
        </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
   
  },
});

export default CartList;
