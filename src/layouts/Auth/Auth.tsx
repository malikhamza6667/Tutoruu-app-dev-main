import React from "react";

import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Colors from "../../../assets/Colors";
import tw from 'twrnc'
import { Card } from "../Card/Card";
type Props = {
    title: string,
    caption: string
    children: React.ReactNode
    subTitle?: string
    onPressSubtitle?: () => void
    footerTitle?: string
    onPressfooterTitle?: () => void
    pressableSubtitleText?: string

}

const Auth: React.FC<Props> = ({ title, children, subTitle, footerTitle, pressableSubtitleText, onPressSubtitle, onPressfooterTitle, caption }) => {
    return (
        <View style={[tw`flex-1 justify-between`, { backgroundColor: Colors.orange }]}>

            <View style={[tw`justify-center `, { flex: 0.2 }]}>
                <Image
                    source={require('./../../../assets/authlogo.png')}
                    style={[tw`self-center`, { height: hp('10%'), width: wp('50%') }]}
                    resizeMode='contain'
                />
            </View>

            <View style={[tw`justify-center  `, { flex: footerTitle ? 0.7 : 0.8 }]}>
               
                    <Text
                        style={[tw`text-white self-center text-xl`, { fontFamily: 'PoppinsBold' }]}

                    >{title}</Text>

               
                <View style={tw`p-2 px-14`}>
                    <Text
                        style={[tw`text-white self-center text-sm text-center`, { fontFamily: 'PoppinsRegular' }]}

                    >{caption}</Text>

                </View>

                <Card children={children} />
                <View style={tw`p-2 my-3 items-center justify-center flex-row`}>

                    <Text
                        style={[tw`text-white self-center text-sm`, { fontFamily: 'PoppinsMedium' }]}

                    >{subTitle}</Text>
                    <TouchableOpacity
                        onPress={onPressSubtitle}
                    >

                        <Text
                            style={[tw`text-white self-center text-sm ml-1`, { fontFamily: 'PoppinsBold' }]}

                        >{pressableSubtitleText}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {footerTitle &&
                <View className="flex-[0.1] justify-center">
                    <TouchableOpacity
                        onPress={onPressfooterTitle}
                    >

                        <Text
                            style={[tw`text-white self-center text-sm`, { fontFamily: 'PoppinsMedium' }]}
                        >{footerTitle}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Auth;