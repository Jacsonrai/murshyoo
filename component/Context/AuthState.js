import React,{useReducer} from 'react'
import AuthContext from './AuthContext'
import Reducer from './Reducer'
import { BASE_URL } from '../../utlis/endpoint'
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState={
    
    isAuth:false,
    token:null
}

const AuthState=({children})=>{
    const[state,dispatch]=useReducer(Reducer,initialState)
    const prevToken=()=>{
        dispatch(
            {
                type:"PREVTOKEN"
            }
        )
    }
    const noPrevToken=()=>{
      dispatch(
          {
              type:"NOPREVTOKEN"
          }
      )
  }
    const signin=(email,password)=>{
        let data = {
            method: "POST",
            credentials: "same-origin",
            mode: "same-origin",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
          try {
            fetch(`${BASE_URL.api}/api/signin`, data)
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.error) {
                  alert(responseJson.error);
                }
                if (responseJson.message) {
                  alert(responseJson.message);
                }
                if (responseJson.user) {
                  console.log(responseJson.token);
                  AsyncStorage.setItem("token", JSON.stringify(responseJson.token))
                    .then((result) => {
                      console.log(result)
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                 
                }
                dispatch({
                    type:"LOGIN",
                    payload:responseJson.token
                })
             

              })
              .catch((error) => {
                console.log(error);
               
              });
          } catch (err) {
            console.log("error", err);
          }
    }
    const signout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    return  <AuthContext.Provider value={{
        ...state,signin,signout,prevToken,noPrevToken
    }}>{children}</AuthContext.Provider>

}
export default AuthState