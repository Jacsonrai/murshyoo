import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../../screen/Auth/LoginScreen";
import RegisterScreen from "../../../screen/Auth/RegisterScreen";
import HomeScreen from "../../../screen/HomeScreen";
import ProfileScreen from "../../../screen/ProfileScreen";
import Routing from "../Routing";

const Stack = createStackNavigator();
const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName="login"
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="sign" component={RegisterScreen} />
      <Stack.Screen name="dashboard" component={Routing}/>
      <Stack.Screen name="screen3" component={ProfileScreen}/>
      
    
    </Stack.Navigator>
  );
};
export { AuthRoute };
