import React, { useState } from "react";

import {View,Text,ProgressBarAndroid} from 'react-native'
import { Card } from "../../layouts/Card/Card";
import Colors from "../../../assets/Colors";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import tw from 'twrnc';
import StarRatings from "../StarRatings/StarRatings";
type Props={
    name: string
    reward: string
    progres: number
    total_attempts_needed: number
}

const Quest:React.FC<Props>=({name,total_attempts_needed,progres,reward})=>{
    const [Progress, setProgress] = useState((progres/100))
    
    return(
        <Card>

        <View style={[tw`px-3 py-3`]}>
            <View style={[tw`flex-row justify-between px-4 py-2`]}>

            <Text>{name}</Text>
            <View style={{paddingHorizontal:hp('3%')}}>

            <StarRatings
            isDisable
            numStars={5}
            rating={(progres/100)*10}
            />
            </View>
            </View>
            <View className="px-3 ">

            <View style={{ borderRadius: 10, overflow: 'hidden',width:wp('70%') }}>
      <ProgressBarAndroid styleAttr="Horizontal" progress={progres/100} indeterminate={false} color={Colors.orange} style={{ transform: [{ scaleY: 5 }] }} />
      <Text style={{ position: 'absolute',color:Colors.white, top: '50%', left: `${progres}%`, transform: [{ translateX: -25 }, { translateY: -10 }],alignSelf:'flex-start' }}>{progres}%</Text>
    </View>
            </View>
        </View>
        </Card>
    )
}

export default Quest