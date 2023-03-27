import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";



const BAP = () => {
    return (
        <Details headerTitle="About">
            <View
                style={[
                    tw`items-center`
                ]}
            >

                <Text
                    style={[
                        { fontFamily: 'PoppinsBold', fontSize: hp('2.3') }
                    ]}
                >Heading</Text>
                <Text
                    style={[
                        { fontFamily: 'PoppinsRegular' }
                    ]}
                >some caption here </Text>
            </View>
        </Details>
    )
}


export default BAP