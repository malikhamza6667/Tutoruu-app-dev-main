import React from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import Details from "../../layouts/Details/Details";



const SupportSubmitted = () => {
    return (

        <Details headerTitle="Payment" >
            <View
                style={[
                    tw`justify-center items-center `, { flex: 0.8 }
                ]}
            >

                <View
                    style={[
                        tw`items-center `, { flex: 0.6 }
                    ]}
                >

                    <Image
                        source={require('../../../assets/payment.jpg')}
                    />
                    <Text
                        style={[
                            tw`p-3`, { fontFamily: 'PoppinsSemiBold', fontSize: hp('2.3'), color: Colors.orange }
                        ]}
                    >Support Request Submitted</Text>
                    <Text
                        style={[
                            tw`w-70 text-center`, { fontFamily: 'PoppinsRegular' }
                        ]}
                    >Thank you for sending us a message. We will get back to you as soon as possible.</Text>
                </View>
            </View>
        </Details>
    )
}

export default SupportSubmitted