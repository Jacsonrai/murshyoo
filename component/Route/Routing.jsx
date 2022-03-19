
import WhiteListScreen from "../../screen/WhiteListScreen";

import { Foundation } from '@expo/vector-icons'
import { ShippingRoute } from "./ShoppingNavigator/ShippingRoute";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProductRoute } from "./ProductNavigator/ProductNavigator";
import { LogoutRouting } from "./LogoutRouting/LogoutRouting";
import Models from "../../screen/Models";
import { ModelRouting } from "./ModelRouting/ModelRouting";
const Tab = createBottomTabNavigator();
const Routing = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          height: 45,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ProductRoute}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShippingRoute}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LogoutRouting}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="WhiteList"
        component={WhiteListScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Models"
        component={ModelRouting}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="female-symbol" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Routing;
