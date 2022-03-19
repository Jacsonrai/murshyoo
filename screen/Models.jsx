
import React from 'react'

import { TouchableOpacity,View, Image, Dimensions,FlatList, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
const width=Dimensions.get("screen").width/2-30
import { modelsData } from '../Const/DummyData';
const Models=({navigation})=>{
    console.log(navigation)
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
            return item.id;
          }}
          numColumns={2}
          data={ modelsData }
          renderItem={({ item }) =>(
            <View style={{padding:10}}  key={item.id}>
            <TouchableOpacity onPress={()=>navigation.navigate("nestedScreen",item)}>
            <View>
            <Image
              source={item.img}
              style={{
                width: width,
                height: 200,
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