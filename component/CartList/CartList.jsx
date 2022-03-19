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

const width = Dimensions.get("screen").width / 1.5;

const CartList = ({ item, navigation }) => {
  const { _id, price, product, quantity } = item;
  const [productDetails, setProductDetails] = useState();
  console.log(productDetails)
  useEffect(() => {
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
