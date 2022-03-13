import { createStackNavigator } from "@react-navigation/stack";

import CheckOut from "../../../screen/CheckOut";
import CartScreen from "../../../screen/CartScreen";

const Stack = createStackNavigator();
const ShippingRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="screen2"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="screen2" component={CartScreen} />
      <Stack.Screen name="nestedScreen" component={CheckOut} />
    </Stack.Navigator>
  );
};
export { ShippingRoute };
