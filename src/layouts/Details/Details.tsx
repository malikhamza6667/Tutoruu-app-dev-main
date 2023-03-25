import React from "react";

import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Icon } from "../../components/Icon/Icon";
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {
    children: React.ReactNode,
    navigation?: any
    headerTitle: string
    ChatIcon?: boolean
}
const Details: React.FC<Props> = ({
    children,
    navigation,
    headerTitle,
    ChatIcon
}) => {
    return (
        <SafeAreaView style={[tw`flex-1`, { backgroundColor: Colors.white, }]}>
            <View style={[tw`flex-row  justify-between items-center`, { height: hp('12%'), paddingHorizontal: wp('5%') }]}>
                <View style={{ width: wp('20%') }}>

                    <TouchableOpacity
                        testID="back-icon"
                        onPress={() => { navigation.goBack() }}
                    >
                        <Icon
                            testID="back-icon"
                            family="Ionicons"
                            name="chevron-back-sharp"
                            size='medium'
                            color={Colors.black}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: wp('40%') }}>

                    <Text style={[tw`self-center`, { fontFamily: 'PoppinsMedium', textAlign: 'center', bottom: hp('0.5%') }]}>{headerTitle}</Text>
                </View>
                <View style={[tw`flex-row justify-center`, { width: wp('20%') }]} >
                    <View>

                        {
                            ChatIcon &&
                            <TouchableOpacity
                                testID="chat-icon"
                                style={{ backgroundColor: Colors.lightorange, width: wp('10%') }}
                                className='p-2 rounded-full'
                                onPress={() => { navigation.goBack() }}
                            >
                                <Icon
                                    family="Ionicons"
                                    name="chatbubbles"
                                    size='small'
                                    color={Colors.orange}
                                />
                            </TouchableOpacity>

                        }
                    </View>
                </View>
            </View>
            {children}
        </SafeAreaView>
    )
}

export default Details