import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../../screen/Auth/LoginScreen";
import HomeScreen from "../../../screen/HomeScreen";

import ProfileScreen from "../../../screen/ProfileScreen";
const Stack=createStackNavigator()
const LogoutRouting=()=>{
return(
    <Stack.Navigator
    initialRouteName="screen3"
    screenOptions={{
      headerShown: false,
    }}
    >
        <Stack.Screen name="screen3" component={ProfileScreen}/>
        <Stack.Screen name="nestedScreen" component={LoginScreen}/>
       
        
    </Stack.Navigator>
)
}
export {LogoutRouting}