import React from "react";

import {View,Text, TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Card } from "../../layouts/Card/Card";
import StarRatings from "../StarRatings/StarRatings";



type Props={
text: string
author_image: string
class_name: string
date: string
author_name: string
rating: number
}
const Review:React.FC<Props>=({
    text,
    author_image,
    author_name,
    class_name,
    date,
    rating
})=>{
    return(
    <Card>
<View 
style={[{paddingHorizontal:hp('3%'),paddingVertical:hp('2%')}]}>
    <View  style={[tw`justify-evenly`]}>

<StarRatings isDisable rating={rating}/>
<Text style={[tw`text-sm m-0.5`,{fontFamily:'PoppinsRegular'}]}>{class_name}</Text>
<Text style={[tw`text-base  m-0.5`,{fontFamily:'PoppinsMedium'}]}>{text}</Text>
<Text style={[tw`text-sm  m-0.5`,{fontFamily:'PoppinsRegular'}]}>{date}</Text>
    </View>
</View>
    </Card>
    )
}

export default Review