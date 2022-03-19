import { StatusBar } from "expo-status-bar";
import { useEffect, useState,useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./component/Loading";
import Routing from "./component/Route/Routing";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoute } from "./component/Route/AuthRoute/AuthRoute";
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContext from "./component/Context/AuthContext";
import AuthState from "./component/Context/AuthState";
import { MainRouting } from "./component/MainRouting/MainRouting";
export default function App() {
  // const{isAuth,signin}=useContext(AuthContext)
  // console.log(isAuth)
 
  
  
  

  // useEffect(() => {
  //   AsyncStorage.getItem('token').then((result)=>{
  //     if(result!==null){
  //       setAuth(JSON.parse(result))
  //     }else{
  //       setAuth(null)
  //     }
  //   })
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 2000);
  // }, []);

  return (
    
   <AuthState>
   <MainRouting/>
    </AuthState>
    
    
  );
}

