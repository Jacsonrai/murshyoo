import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useEffect,useState } from "react";
import { BASE_URL } from "../../utlis/endpoint";

const width=Dimensions.get("screen").width/2-30
const WhiteListCard= ({ item }) => {
  const[productDetails,setProductDetails]=useState()
 const{product,price,name}=item
//  console.log(productDetails.data.productPicture)
 useEffect(()=>{
  try {
    fetch(
      `${BASE_URL.api}/api/product/productdetails?id=${product}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson)
      setProductDetails(responseJson)
      });
  } catch (err) {
    console.log(err);
  }
 },[])
  return (
    // <View >
    //   <View style={styles.imageContainer}>
    //     <Image
    //       source={{uri:`${productDetails?.data?.productPicture}`}}
    //       style={{
    //         width: width,
    //         height: 200,
    //        borderRadius:20
    //       }}
    //       resizeMode="cover"
    //     />
    //   </View>
   
    // </View>
     <View
     style={{
       height: 200,
       width: 180,
       marginLeft: 10,
       marginRight: 10,
       elevation: 1,
       shadowColor: "#520023",
       borderWidth: 0.1,
       marginTop:10
     }}
     key={item._id}
   >
     <View style={{ flex: 2 }}>
       <Image
         source={{uri:`${productDetails?.data?.productPicture}`}}
         style={{
           
           width: null,
           height: null,
           flex: 1,
           borderTopLeftRadius: 5,
           borderTopRightRadius: 5,
         }}
         resizeMode="cover"
       />
     </View>
     <View
       style={{
         flex: 1,
         flexDirection: "row",
         justifyContent:"space-around",
         backgroundColor: "#F2A9BE",
         paddingTop: 1,
         maxHeight:50,
         alignItems: "center",
         paddingHorizontal: 4,
       }}
     >
       <Text style={{ color: "white", fontWeight: "700" }}>
         {item.name}
       </Text>
       <Text style={{ color: "white", fontWeight: "700" }}>
         Rs.{item.price}
       </Text>
      
     </View>
   </View>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 10,
    },
  cardDetails: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor: "gray",
    padding: 10,
  },
  cardText:{
      fontSize:16,
      fontWeight:"bold"
  }
});
export default WhiteListCard;
