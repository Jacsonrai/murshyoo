import {View,Text} from 'react-native'
const Review=({review})=>{
    return(
    <View style={{marginTop:30}}>
        {review?<Text>{review}</Text>:<Text>***Nothing to Review***</Text>}
        

    </View>)
}
export default Review