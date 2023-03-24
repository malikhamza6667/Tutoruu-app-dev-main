


import React from "react";

import {View,Text, TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Card } from "../../layouts/Card/Card";


type Props={
    slots: any[]
}
// [{ date: '2020-01-01', available_times: [12, 13, 14] }]
const SlotsCard:React.FC<Props>=({slots})=>{
    const num_of_slots= slots[0].available_times.length
    const date= slots[0].date
    return(
        <Card>

<View style={[tw`justify-center items-center`,{paddingHorizontal: wp('3%'),paddingVertical:hp('2%')}]}>
    <Text style={[tw`text-sm`,{color: Colors.orange,fontFamily:'PoppinsRegular'}]}>{num_of_slots} Slots</Text>
    <Text style={[tw`text-base`,{color: Colors.black,fontFamily:'PoppinsMedium'}]}>{date}</Text>

</View>
        </Card>
    )
}

export default SlotsCard