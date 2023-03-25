import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../../../assets/Colors";


const MagicLink = () => {
    const [email, setEmail] = useState('')
    return (
        <View
            style={[tw`flex-1 `, { backgroundColor: Colors.orange }]}
            testID='magic-link-screen'
        >
            <View style={[tw`justify-center `, { flex: 0.2 }]}>
                <Image
                    source={require('./../../../../assets/authlogo.png')}
                    style={[tw`self-center`, { height: hp('10%'), width: wp('50%') }]}
                    resizeMode='contain'
                />
            </View>

            <View style={[tw`justify-center items-center`, { fontFamily: 'PoppinsSemiBold', flex: 0.5 }]}>
                <Image
                    source={require('../../../../assets/envelope.png')}
                    style={[
                        { height: hp('15%'), width: wp('25%') }
                    ]}
                    resizeMode='contain'
                />
                <Text
                    style={[tw`text-white self-center text-xl text-center`, { fontFamily: 'PoppinsBold' }]}
                >Check Your Inbox!</Text>


                <View style={tw`p-2 px-12`}>
                    <Text
                        style={[tw`text-white self-center text-sm text-center`, { fontFamily: 'PoppinsRegular' }]}

                    >Click on the magic link you just received to verify it’s really you.</Text>

                </View>


            </View>


        </View>

    )
}

export default MagicLink;
