import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./component/Loading";
import Routing from "./component/Route/Routing";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoute } from "./component/Route/AuthRoute/AuthRoute";
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState();
  console.log('auth',auth)
  useEffect(() => {
    AsyncStorage.getItem('token').then((result)=>{
      if(result!==null){
        setAuth(JSON.parse(result))
      }else{
        setAuth(null)
      }
    })
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <StatusBar style="dark" />
          {auth ? (
            <NavigationContainer>
              <Routing />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <AuthRoute />
            </NavigationContainer>
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
