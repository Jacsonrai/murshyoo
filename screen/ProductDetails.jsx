import {
  Text,
  Image,
  ScrollView,
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import HomeList from "../component/HomeList/HomeList";
import { BASE_URL } from "../utlis/endpoint";
const ProductDetails = ({ route, navigation }) => {
 
  const { _id, name, productPicture, price, quantity } = route.params;
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(1);
  const [changePrice, setChangePrice] = useState(price);
  const[message,setMessage]=useState('')
  const[token,setToke]=useState()
 
useEffect(()=>{
AsyncStorage.getItem('token').then((result)=>{
  if(result!==null){
    setToke(JSON.parse(result))
  }else{
    setToke(null)
  }
})
},[])
  const handleDec = () => {
    if (count > 1) {
      setCount(count - 1);
      setChangePrice(changePrice - price);
    }
  };
  const handleInc = () => {
    setCount(count + 1);
    if (count >= 1) {
      setChangePrice(changePrice + price);
    }
  };
const handleSubmit=async()=>{
  let product=_id
  let quantity=count
  let price=changePrice
  
 try{
  fetch(`${BASE_URL.api}/api/user/cart/addtocart`,{
    method:"POST",
    
    headers:{
      Authorization:`Bearer ${token}`,
       'Content-Type':'application/json'
       
    },
    body:JSON.stringify({
     cartItems:{
        product,
        quantity,
        price
      }
     
    })
  }).then((response)=>response.text())
  .then((responseJson)=>{
   console.log(responseJson)
   if(responseJson){
     alert("Item added to cart")
     navigation.navigate("screen1")
   }
    
    
  }).catch((err)=>{
    console.log(err)
  })
  
 }catch(err){
   console.log(err)
 }
}


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{backgroundColor:"#F2A9BE"}} >
       
        <View style={{ alignItems: "center", marginTop: 50,backgroundColor:"#F2A9BE"}}>
          <Image
            source={{ uri: productPicture, width: 150, height: 200 }}
            style={{
             
              borderRadius: 10,
              
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            marginTop:15,
            backgroundColor:"pink",
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            padding:5,
            
            
          }}
        ><View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
           <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              letterSpacing: 2,
              
              color: "white",
            }}
          >
            {name}
          </Text>
          <View style={{ marginLeft: 70 }}>
            <View
              style={{
                backgroundColor: "	rgba(255,105,180,0.09)",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <AntDesign name="hearto" size={24} color="white" />
            </View>
          </View>

        </View>
        <View style={[styles.mainBox]}>
          <TouchableOpacity
            style={[styles.catText, active == 0 && styles.catSelect]}
            onPress={() => setActive(0)}
          >
            <Text
              style={{
                fontSize: 17,
                letterSpacing: 1,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Over View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={[styles.catText, active == 1 && styles.catSelect]}
          >
            <Text
              style={{
                fontSize: 17,
                letterSpacing: 1,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Reviews
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ margin: 10, justifyContent: "center", alignItems: "center",height:135 }}
        >
          <HomeList
            index={active}
            name={name}
            price={price}
            quantity={quantity}
            review={""}
          />
        </View>
        <View
          style={{
            margin: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Text style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>
            Rs{changePrice}
          </Text>
          <View style={{ flexDirection: "row", height: "auto" }}>
            <Button title="-" color="#F2A9BE" onPress={() => handleDec()} />
            <Text
              style={{
                padding: 8,
                fontSize: 15,
                backgroundColor: "white",
                fontWeight: "bold",
              }}
            >
              {count}
            </Text>
            <Button title="+" color="#F2A9BE" onPress={() => handleInc()} />
          </View>
          <View style={{ marginLeft: 70 }}>
            <View
              style={{
                backgroundColor: "	rgba(255,105,180,0.09)",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Feather name="shopping-cart" size={24} color="white" onPress={()=>handleSubmit()}/>
            </View>
          </View>
          
         
        </View>
         
        </View>
        
       
      
       
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    
  
  },
  catText: {
    // backgroundColor:"gray",
    padding: 5,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  catSelect: {
    backgroundColor: "#F2A9BE",
    padding: 5,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default ProductDetails;
