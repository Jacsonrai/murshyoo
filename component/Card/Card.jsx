import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const width=Dimensions.get("screen").width/2-30
const Card = ({ item }) => {
  return (
    <View style={styles.card} key={item.id}>
      <View style={styles.imageContainer}>
        <Image
          source={item.img}
          style={{
            width: width,
            height: 200,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardText}>Rs:{item.price}</Text>
        <Entypo name="heart" size={24} color="#fff8dc" />
        <Ionicons name="add-circle" size={24} color="silver" />
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
export default Card;
