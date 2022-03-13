import OverView from "./OverView"
import Review from "./Review"

const HomeList=({index,name,price,quantity,review})=>{
    
switch(index){
    case 0:
        return <OverView name={name} price={price} quantity={quantity}/>
    case 1:
        return <Review review={review}/>
    default:
        return <OverView/>
}
}
export default HomeList