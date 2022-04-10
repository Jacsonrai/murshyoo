import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect,useState } from "react";
import WhiteListCard from "../component/WhiteListCard/WhiteListCard";
import { whiteListData } from "../Const/DummyData";
import { BASE_URL } from "../utlis/endpoint";
import AsyncStorage from '@react-native-async-storage/async-storage'
const WishListScreen = () => {
  const[wishData,setWishData]=useState()
  const[token,setToken]=useState()

  useEffect(()=>{
    AsyncStorage.getItem('token').then((result)=>{
      if(result!==null){
        setToken(JSON.parse(result))
      }else{
        setToken(null)
      }
    })
    try {
      fetch(
        `${BASE_URL.api}/api/wish/getwish`,{
          method:"GET",
          headers:{
            Authorization:`Bearer ${token}`,
           'Content-Type':'application/json'
          }
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          
          setWishData(responseJson.wish.wishItems)
          console.log(responseJson)
        });
    } catch (err) {
      console.log(err);
    }
  },[token,wishData])
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
        WishList
      </Text>
    {wishData?.length<1?<Text style={{textAlign:"center",fontSize:20,marginTop:50,color:"white"}}>**wishList is Empty**</Text>:
    <>
      <FlatList
      data={wishData}
      keyExtractor={(item, index) => {
        return item._id;
      }}
      renderItem={({item,index})=>(
        <WhiteListCard item={item}/>
      )}

      />
    
 </>
    }
{/*      
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={wishData}
        renderItem={({ item }) => <WhiteListCard item={item} />}
      /> */}
    </SafeAreaView>
  );
};
export default WishListScreen;
