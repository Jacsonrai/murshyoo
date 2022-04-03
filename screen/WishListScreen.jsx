import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WhiteListCard from "../component/WhiteListCard/WhiteListCard";
import { whiteListData } from "../Const/DummyData";

const WishListScreen = () => {
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
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={whiteListData}
        renderItem={({ item }) => <WhiteListCard item={item} />}
      />
    </SafeAreaView>
  );
};
export default WishListScreen;
