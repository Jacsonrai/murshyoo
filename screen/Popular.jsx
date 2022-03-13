import {  View,TouchableOpacity, Text, Image,ScrollView,ActivityIndicator,FlatList } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { BASE_URL } from "../utlis/endpoint";
import {useState,useEffect} from 'react'
const Popular = ({navigation}) => {
  const [popular,setPopular] = useState("");
 
  const getPopularProduct = async () => {
    let data = await getCategory();
    
    let categorid = data[1]._id;
    try {
      fetch(
        `${BASE_URL.api}/api/product/getproductbyid?category=${categorid}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          // setdata(responseJson.data)

          setPopular(responseJson.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getCategory = async () => {
    try {
      let response = await fetch(
        `${BASE_URL.api}/api/category/getcategory`
      );
      let json = await response.json();
      return json.cat;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory()
    getPopularProduct();
    
  }, []);



 
  
  

  return (
 
    <View style={{ height: 140, marginTop: 10 }}>
                <ScrollView
                  // horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {popular.length < 1 ? (
                    <ActivityIndicator size={"large"} color={"#2FBBF0"} />
                  ) : (
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={popular}
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
                                resizeMode: "cover",
                                width: null,
                                height: null,
                                flex: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                              }}
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
                            <Text style={{ color: "white", fontWeight: "700",marginRight:10}}>
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
   
  );
};

export default Popular;
