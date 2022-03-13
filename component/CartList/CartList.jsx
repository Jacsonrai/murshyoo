import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const width = Dimensions.get("screen").width / 1.5;



const CartList = ({ item,navigation}) => {

  return (
    <View style={styles.mainContainer}>
      
      
            <View style={styles.detailsContainer} key={item.id}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={item.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.priceText}>Rs:{item.price}</Text>
            <View style={styles.valueContainer}>
              <Button title="-"/>
              <Text style={{padding:8,fontSize:15,backgroundColor:"white",fontWeight:"bold"}}>0</Text>
              <Button title="+"/>
  
            </View>
              <Entypo name="heart" size={24} color="#fff8dc" />
            </View>
            <View style={styles.paymentContainer}>
              <Text style={styles.title}>Payment via khalti</Text>
              <Text style={styles.itemText}>Total:{item.price}</Text>
              <Text style={styles.itemText}>Discount:{item.discount}</Text>
              <Text style={styles.itemText}>Delivery Charge:Free</Text>
              <Button title="place order" color="#007AFF" onPress={()=>navigation.navigate("nestedScreen")}/>
            </View>
          </View>
      
      
      </View>
 
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop:2,
    marginBottom:15,
   
    alignItems: "center",
  },
  valueContainer: {
    flexDirection: "row",
    height: "auto",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  itemText: {
    padding: 5,
    fontSize: 15,
    fontWeight: "600",
  },
  paymentContainer: {
    backgroundColor: "silver",
    padding: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsTextContainer: {
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  detailsContainer: {
    marginTop: 20,
  },
  imageContainer: {},
  image: {
    width: width,
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
 
});

export default CartList;
