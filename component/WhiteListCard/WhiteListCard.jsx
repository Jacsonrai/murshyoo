import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const width=Dimensions.get("screen").width/2-30
const WhiteListCard= ({ item }) => {
  return (
    <View style={styles.card} key={item.id}>
      <View style={styles.imageContainer}>
        <Image
          source={item.img}
          style={{
            width: width,
            height: 200,
           borderRadius:20
          }}
          resizeMode="cover"
        />
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
