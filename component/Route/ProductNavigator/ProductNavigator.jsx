import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screen/HomeScreen";
import ProductDetails from "../../../screen/ProductDetails";
const Stack=createStackNavigator()
const ProductRoute=()=>{
return(
    <Stack.Navigator
    initialRouteName="screen1"
    screenOptions={{
      headerShown: false,
    }}
    >
        <Stack.Screen name="screen1" component={HomeScreen}/>
        <Stack.Screen name="nestedScreen" component={ProductDetails}/>

    </Stack.Navigator>
)
}
export {ProductRoute}