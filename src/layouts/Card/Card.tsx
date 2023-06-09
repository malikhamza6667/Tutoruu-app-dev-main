import React from "react";
import { View, Text } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import tw from 'twrnc';
type Props = {
    children: React.ReactNode;
}


export const Card: React.FC<Props> = ({ children }) => {
  
    return (
        <View
            style={{
                // height: hp('15%'),
                width: wp('90%'),
                alignSelf: 'center',
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 7,
                borderRadius: 20,
                shadowRadius: 5,
                margin:hp('1'),
                justifyContent: 'center',
                //    paddingHorizontal: wp('3%'),
                backgroundColor: "#fff", // Add backgroundColor property
            }}
            testID="card" >
            {children}
        </View>
    )
}