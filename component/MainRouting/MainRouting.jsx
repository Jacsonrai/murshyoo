
import { StatusBar } from "expo-status-bar";
import { useEffect, useState,useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import Routing from "../Route/Routing";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoute } from "../Route/AuthRoute/AuthRoute";
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContext from "../Context/AuthContext";

const MainRouting=()=>{
    const{isAuth,prevToken,noPrevToken}=useContext(AuthContext)
    
    const [loading, setLoading] = useState(false);
    const[auth,setAuth]=useState(null)
    
    useEffect(() => {
    AsyncStorage.getItem('token').then((result)=>{
      if(result!==null){
        prevToken()
      }else{
        noPrevToken()
      }
    })
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
return(<>
  {loading ? (
        <Loading />
      ) : (
         <View style={styles.container}>
         <StatusBar style="dark" />
         
          
      {isAuth? ( 
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
</>)
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
export {
    MainRouting
}