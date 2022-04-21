import {View,Text} from 'react-native'
import StarRating from '../StarComponent/Star'
const Review=({review})=>{
    return(
    <View style={{marginTop:30}}>
       
        <StarRating review={review}/>

    </View>)
}
export default Review