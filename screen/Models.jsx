
import React from 'react'

import { TouchableOpacity,View, Image, Dimensions,FlatList, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect,useState } from 'react';
const width=Dimensions.get("screen").width/2-30

import { BASE_URL } from '../utlis/endpoint';

const Models=({navigation})=>{
    console.log(navigation)
    const[model,setModel]=useState()
   console.log(model)
    useEffect(()=>{
      const getModel=async()=>{
        try{
          fetch(`${BASE_URL.api}/api/model/getmodel`,{
            method:"GET",
            headers:{
              'Content-Type':'application/json'
            }
          }).then((response)=>
          response.json()
          ).then((responseJson)=>{
            setModel(responseJson.model)
          })

        }
        catch(err){
          console.log(err)
        }
      }
    getModel()
    },[model])
    return(
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
          MODELS
        </Text>
        
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          legacyImplementation={false}
          keyExtractor={(item, index) => {
            return item._id;
          }}
          numColumns={2}
          data={ model }
          renderItem={({ item }) =>(
            
            <View style={{padding:10}}  key={item.id}>
            <TouchableOpacity onPress={()=>navigation.navigate("nestedScreen",item)}>
            <View style={{flex:2}}>
            <Image
              source={{uri:`${item?.modelPicture}`,width:width, height: 200}}
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              resizeMode="cover"
            />
            
          </View>
    
            </TouchableOpacity>
        
        </View>
          )}
        />
       
      </SafeAreaView>
    )

}
export default Models