import React, { useState } from 'react'
import { Text,View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';


import Colors from '../../assets/Colors'
const StarRatings:React.FC =()=>{
    const [starCount,setStartCount]=useState(5)
const onStarRatingPress=(rating: number)=>{
    setStartCount(rating)
}
    return(
<View  >
{/* <StarRating
emptyStarColor='white'
fullStar={'yellow'}
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={(rating) => onStarRatingPress(rating)}
      /> */}
      <AirbnbRating
      starContainerStyle={{alignSelf:'flex-start'}}
reviewColor={Colors.orange}
showRating={false}
defaultRating={5}
selectedColor={Colors.orange}
      count={5}
      size={15}
      />
    {/* <Rating
    startingValue={5}
  
 
  ratingCount={5}
  imageSize={15}

  
/> */}
</View>
    )
}
export default StarRatings