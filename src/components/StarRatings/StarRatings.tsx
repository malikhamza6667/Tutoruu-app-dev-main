import React, { useState } from 'react'
import { Text,View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../../assets/Colors';

type Props={
    rating: number
    isDisable?: boolean
}

const StarRatings:React.FC<Props> =({rating,isDisable})=>{
    const [starCount,setStartCount]=useState(rating)
const onStarRatingPress=(rating: number)=>{
    setStartCount(rating)
}
    return(
<View  >

      <AirbnbRating
      
      starContainerStyle={{alignSelf:'flex-start'}}
      ratingContainerStyle={{width:widthPercentageToDP('22%')}}
reviewColor={Colors.orange}
isDisabled={isDisable}
showRating={false}
defaultRating={starCount}
selectedColor={Colors.orange}
      count={5}
      size={12}
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