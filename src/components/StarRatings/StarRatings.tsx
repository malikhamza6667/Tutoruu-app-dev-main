import React, { useState } from 'react'
import { Text,View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colors from '../../../assets/Colors';

type Props={
    rating: number
}

const StarRatings:React.FC<Props> =({rating})=>{
    const [starCount,setStartCount]=useState(rating)
const onStarRatingPress=(rating: number)=>{
    setStartCount(rating)
}
    return(
<View  >

      <AirbnbRating
      starContainerStyle={{alignSelf:'flex-start'}}
reviewColor={Colors.orange}
showRating={false}
defaultRating={starCount}
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