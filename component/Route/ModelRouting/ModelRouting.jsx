import { createStackNavigator } from "@react-navigation/stack";
import ModelsDetails from "../../../screen/ModelDetails";
import Models from "../../../screen/Models";



const Stack = createStackNavigator();
const ModelRouting = () => {
  return (
    <Stack.Navigator
      initialRouteName="screen5"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="screen5" component={Models} />
      <Stack.Screen name="nestedScreen" component={ModelsDetails} />
    </Stack.Navigator>
  );
};
export { ModelRouting };
