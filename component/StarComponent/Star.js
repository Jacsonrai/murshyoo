// React Native Custom Star Rating Bar
// https://aboutreact.com/react-native-custom-star-rating-bar/

// import React in our code
import React, {useState,useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { BASE_URL } from '../../utlis/endpoint';

const StarRating = ({review}) => {
  
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState('');
  const[product,setProduct]=useState('')

  console.log('hello',product?.data?.review)
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    useEffect(()=>{
      setDefaultRating(product?.data?.review)
      
    },[product])
useEffect(()=>{
  const setRating=async()=>{
    try {
     await fetch(`${BASE_URL.api}/api/product/productrating?id=${review}&rating=${defaultRating}`,{
       method:"POST",
       headers:{
         'Content-Type': 'application/json'
        }
     })
    } catch (err) {
      console.log(err);
    }
  }
  setRating()
 
})
useEffect(()=>{
  const getProduct=async()=>{
    try {
      await fetch(
        `${BASE_URL.api}/api/product/productdetails?id=${review}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setProduct(responseJson)
        });
    } catch (err) {
      console.log(err);
    }

  }
  getProduct()
},[])

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text >
          {/* To show the rating selected */}
          {defaultRating}
          {/* {defaultRating} /{Math.max.apply(null, maxRating)} */}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
         
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius:2
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    // backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});