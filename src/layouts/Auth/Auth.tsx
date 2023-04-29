import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, AsyncStorage, I18nManager, ScrollView } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Colors from "../../../assets/Colors";
import tw from 'twrnc'
import { Card } from "../Card/Card";
import i18n from "../../localization/LocalizedStrings/LocalizedStrings";
type Props = {
    title: string,
    caption?: string
    children: React.ReactNode
    subTitle?: string
    onPressSubtitle?: () => void
    footerTitle?: string
    onPressfooterTitle?: () => void
    pressableSubtitleText?: string
    fullSizeSubView?:boolean

}

const Auth: React.FC<Props> = ({ title, children, subTitle, footerTitle, pressableSubtitleText, fullSizeSubView,onPressSubtitle, onPressfooterTitle, caption }) => {

    return (
      
        

        <View style={[tw`flex-1 justify-between`,{backgroundColor: Colors.orange } ]}>

            <View 
            style={[tw`justify-center`, { flex: fullSizeSubView? 0.1:0.2,marginTop:fullSizeSubView?hp('2%'):0 }]}
            >
                <Image
                    source={require('./../../../assets/authlogo.png')}
                    style={[tw`self-center`, { height: hp('10%'), width: wp('50%') }]}
                    resizeMode='contain'
                />
            </View>

            <View style={[tw`justify-center  `, { flex: footerTitle ? 0.7 : fullSizeSubView? 0.9:0.8 }]}>
            <View style={[tw`justify-center  `,]}>
            <ScrollView
            
          >

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
          </ScrollView>
            </View>
            </View>
            {footerTitle &&
                <View  style={[tw` justify-center`,{flex:0.1}]}>
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