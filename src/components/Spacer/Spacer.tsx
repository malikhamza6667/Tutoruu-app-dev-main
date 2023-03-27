import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

const Spacer = () => {

    return (
        <View

            style={[
                tw``, { marginVertical: hp('0.5') }
            ]}
        ></View>
    )
}

export default Spacer