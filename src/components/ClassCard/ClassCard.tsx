import React from "react";

import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Card } from "../../layouts/Card/Card";
import { Icon } from "../Icon/Icon";



type Props = {
    name: string
    desc: string
    onPress?: () => void
}

const ClassCard: React.FC<Props> = ({ name, desc, onPress }) => {
    return (
        <Card>
            <View style={[tw`flex-row justify-between`, { paddingHorizontal: hp('3%'), paddingVertical: hp('3%') }]}>
                <View style={{ width: wp('50%') }}>
                    <Text style={[tw`text-xs m-1`, { fontFamily: 'PoppinsMedium', textTransform: 'uppercase', color: Colors.orange }]}>{desc}</Text>
                    <Text style={[tw`text-base m-1`, { fontFamily: 'PoppinsRegular', textTransform: 'capitalize', color: Colors.black }]}>{name}</Text>
                </View>

                <View style={[tw`flex-row self-end justify-between items-center`, { width: wp('18%') }]}>
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <Text style={[tw`text-sm`, { fontFamily: 'PoppinsBold', color: Colors.orange }]}>View</Text>
                    </TouchableOpacity>
                    <Icon
                        family="AntDesign"
                        name="arrowright"
                        size="xsmall"
                        color={Colors.orange}
                    />
                </View>
            </View>
        </Card>
    )
}

export default ClassCard