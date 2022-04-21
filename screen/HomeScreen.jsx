import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import NewArrival from "./NewArrival";
import Popular from "./Popular";
import Recommended from "./Recommended";
import {useState, useEffect } from 'react'
import { BASE_URL } from "../utlis/endpoint";


const HomeScreen = ({navigation}) => {
  const[textInputValue,setTextInputValue]=useState('')
  const[searchData,setSearchData]=useState({})
  console.log('text',textInputValue)
  console.log('search',searchData)
 useEffect(()=>{
  const getCategory = async () => {
    try {
      let response = await fetch(
        `${BASE_URL.api}/api/product/search?name=${textInputValue}`
      );
      let json = await response.json();
     setSearchData(json)
    } catch (err) {
      console.log(err);
    }
  };
  getCategory()
 },[textInputValue])
  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <StatusBar backgroundColor="pink" />
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 25,
          padding: 10,
          fontWeight: "bold",
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
          letterSpacing: 2,
        }}
      >
        MURSHYOO
      </Text>
      {
      searchData?.data?.length>0?<>
       <ScrollView scrollEventThrottle={16}>
        <View style={styles.homeContainer}>
          <View style={styles.searchContainer}>
            <AntDesign
              name="search1"
              size={24}
              color="gray"
              style={{
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                marginLeft: 10,
                backgroundColor: "white",
                justifyContent: "center",
                padding: 2,

                elevation: 2,
                shadowColor: "#52006A",
              }}
            />
            <TextInput 
            placeholder="search" 
            style={styles.searchText} 
            onChangeText={text=>setTextInputValue(text)}
            />
          </View>

          <View style={{ height: 140, marginTop: 10 }}>
                <ScrollView
                  // horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {searchData?.data?.length < 1 ? (
                    <ActivityIndicator size={"large"} color={"#2FBBF0"} />
                  ) : (
                   
                      <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={searchData?.data}
                      keyExtractor={(item, index) => {
                        return item._id;
                      }}
                      renderItem={({ item, index }) => (
                    
                        <TouchableOpacity onPress={()=>navigation.navigate("nestedScreen",item)}>
                        
                        <View
                          style={{
                            height: 140,
                            width: 180,
                            marginLeft: 10,
                            marginRight: 10,
                            elevation: 1,
                            shadowColor: "#520023",
                            borderWidth: 0.1,
                          }}
                          key={item._id}
                        >
                          <View style={{ flex: 2 }}>
                            <Image
                              source={{ uri: `${item.productPicture}` }}
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
                        </TouchableOpacity>
                      )}
                    />
                      
                    
                  )}
                </ScrollView>
              </View>
   
         

          
         
        </View>
      </ScrollView>
      
      </>:<>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.homeContainer}>
          <View style={styles.searchContainer}>
            <AntDesign
              name="search1"
              size={24}
              color="gray"
              style={{
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                marginLeft: 10,
                backgroundColor: "white",
                justifyContent: "center",
                padding: 2,

                elevation: 2,
                shadowColor: "#52006A",
              }}
            />
            <TextInput 
            placeholder="search" 
            style={styles.searchText} 
            onChangeText={text=>setTextInputValue(text)}
            />
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                New Arrival
              </Text>
              <NewArrival navigation={navigation}/>
            </View>
          </ScrollView>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                Popular
              </Text>
              <Popular navigation={navigation} />
            </View>
          </ScrollView>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                Recommended
              </Text>
            </View>
          </ScrollView>
          <Recommended navigation={navigation} />
        </View>
      </ScrollView>
      </>
      }
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "pink",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.1,
    height: 50,
    elevation: 1,
    shadowColor: "#52006A",
  },
  searchText: {
    fontSize: 22,
    color: "gray",
    textAlign: "center",
    backgroundColor: "white",
    width: "70%",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 5,
    shadowColor: "#520023",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryText: {
    margin: 10,
    fontSize: 16,
    color: "#a9a9a9",
    fontWeight: "bold",
  },
  selectedCategory: {
    color: "gray",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
export default HomeScreen;
