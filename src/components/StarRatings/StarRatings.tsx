import React, { useState } from 'react'
import { Text,View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../../assets/Colors';

type Props={
    rating: number
    isDisable?: boolean
    numStars?: number
    size?: number
    testId?:string

}

const StarRatings:React.FC<Props> =({rating,isDisable,numStars,testId,size})=>{
    const [starCount,setStartCount]=useState(rating)
const onStarRatingPress=(rating: number)=>{
    setStartCount(rating)
}
    return(
<View testID={testId?testId:''} >

      <AirbnbRating
      
      starContainerStyle={{alignSelf:'flex-start'}}
      ratingContainerStyle={{width: numStars?widthPercentageToDP('4%'): widthPercentageToDP('22%')}}
reviewColor={Colors.orange}
isDisabled={isDisable}
showRating={false}
defaultRating={starCount}
selectedColor={Colors.orange}
      count={numStars?numStars: 5}
      size={size? size :12}
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