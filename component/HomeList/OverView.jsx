import {View,Text} from 'react-native'
const OverView=({name,price,quantity,index})=>{
    return(
    <View style={{marginTop:10,borderRadius:8,padding:10,backgroundColor:"#F2A9BE", elevation: 2,
    shadowColor: "#52006A",}}>
        <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Product Name: {name}</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Price: Rs {price}</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Quantity: {quantity}</Text>
    </View>)
}

export default OverView