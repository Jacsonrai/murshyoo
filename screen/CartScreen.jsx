import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FlatList,ActivityIndicator,ScrollView,Button,TouchableOpacity} from "react-native";

import CartList from "../component/CartList/CartList";
import {BASE_URL} from '../utlis/endpoint'
import { useEffect,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'





const CartScreen = ({ navigation }) => {
  const[token,setToken]=useState()
  const[carts,setCarts]=useState('')
  
 
  



 
  
  useEffect(()=>{
    AsyncStorage.getItem('token').then((result)=>{
      if(result!==null){
        setToken(JSON.parse(result))
      }else{
        setToken(null)
      }
    })
  
    try{
    
      fetch(`${BASE_URL.api}/api/user/cart/getcart`,{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`,
         'Content-Type':'application/json'
        }
      }).then((response)=>response.json()).then((responseJson)=>{
       setCarts(responseJson.cart.cartItems)
      }).catch((err)=>{
        console.log(err)
      })

    }catch(err){
      console.log(err)
    }
},[token,carts])
const handlePress=()=>{

  navigation.navigate("nestedScreen",carts)
}

  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
     
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 23,
          fontWeight: "bold",
          letterSpacing: 5,
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
          borderWidth: 0.1,
          height: 50,
         elevation: 1,
         shadowColor: "#52006A",
          padding:10
        }}
      >
        My Cart
      </Text>
      {carts?.length<1?<Text style={{textAlign:"center",fontSize:20,marginTop:50,color:"white"}}>**Cart is Empty**</Text>:<>
      <FlatList
      data={carts}
      keyExtractor={(item, index) => {
        return item._id;
      }}
      renderItem={({item,index})=>(
        <CartList item={item}/>
      )}

      />
    <TouchableOpacity onPress={()=>handlePress()} style={{backgroundColor:"#F2A9BE",marginHorizontal:100,marginVertical:20,borderRadius:10, elevation:2}}>
        <Text style={{fontSize:20,padding:10,fontWeight:"bold",color:"white",alignItems:"center",textAlign:"center"}}>Place Order</Text>
    </TouchableOpacity>
      
      
      
  
       
      </>
     }
  
    
     
    
     

    
     
     
        
     
    </SafeAreaView>
  );
};

export default CartScreen;
