import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

type Props = {
    heading: string
}


const Heading: React.FC<Props> = ({ heading }) => {
    return (
        <View style={[{ paddingHorizontal: hp('3%') }]}>
            <Text
                style={[
                    tw`text-lg`, { fontFamily: 'PoppinsSemiBold' }
                ]}
            >{heading}</Text>
        </View>
    )
}

export default Heading