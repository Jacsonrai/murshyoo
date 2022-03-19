import {useState}from 'react'
export const getCart=(BASE_URL,token)=>{
    const[data,setData]=useState()
    try{
    fetch(`${BASE_URL.api}/api/user/cart/getcart`,{
          method:"GET",
          headers:{
            'Authorization':`Bearer${ token}`,
           'Content-Type':'application/json'
          }
        }).then((response)=>response.json()).then((responseJson)=>{
       setData(responseJson)
        }).catch((err)=>{
          console.log(err)
        })
  
      }catch(err){
        console.log(err)
      }
      return data

}