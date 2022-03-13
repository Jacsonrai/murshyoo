import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FlatList} from "react-native";
import { cartData } from "../Const/DummyData";
import CartList from "../component/CartList/CartList";

const CartScreen = ({ navigation }) => {
 
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

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={cartData}
        renderItem={({ item }) => (
          <CartList item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
