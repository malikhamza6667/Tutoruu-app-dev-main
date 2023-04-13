import React from "react";


import {View,Text, TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import tw from 'twrnc';
import Colors from "../../../assets/Colors";

// <Section title='Classes' description='These are your enrolled classes.' button={{ shape: 'round', icon: 'plus', className: 'bg-secondary text-primary' }}>
// 	// inner content
// </Section>

type Button={
    shape: string
    icon: string
    className: string
}

type Props={
    title: string
    pressableSubtitle?: string
    description?: string
    button?: Button
    children: React.ReactNode
    onPressSubtitle?:()=>void

}
const Section:React.FC<Props>=({
    title,
    pressableSubtitle,
    description,
    button,
    onPressSubtitle,
    children})=>{
return(
<View style={tw`px-3`}>
    
           <Text style={[tw`px-6 py-2 text-base`,{fontFamily: 'PoppinsMedium'}]}>{title}</Text>

    
    <View>
        {children}
    </View>
    <TouchableOpacity
    onPress={onPressSubtitle}
    >
    <Text style={[tw`px-6 py-2  text-sm self-center`,{fontFamily: 'PoppinsBold',color:Colors.orange}]}>{pressableSubtitle}</Text>

    </TouchableOpacity>
</View>
)
}

export default Section