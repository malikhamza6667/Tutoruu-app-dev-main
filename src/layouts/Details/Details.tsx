import React from "react";

import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Icon } from "../../components/Icon/Icon";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button/Button";

import Ionicons from 'react-native-vector-icons/Ionicons'
type Props = {
    children: React.ReactNode,
    navigation?: any
    headerTitle: string
    ChatIcon?: boolean
    onPressChatIcon?: () => void
    onPressBackIcon?: () => void


}
const Details: React.FC<Props> = ({
    children,
    // navigation,
    headerTitle,
    ChatIcon,
    onPressBackIcon,
    onPressChatIcon
}) => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[tw`flex-1 `, { backgroundColor: Colors.white }]}>
            <View style={[tw`flex-row  justify-between items-center`, { height: hp('7%'), paddingHorizontal: wp('5%') }]}>
                <View style={{ width: wp('20%') }}>

                    {/* <TouchableWithoutFeedback
                        testID="back-icon"
                        //  onPress={onPressBackIcon}
                         onPress={()=>{alert('Preessed')}}
                        // style={{backgroundColor:'red'}}
                    >
                        <Icon
                            testID="back-icon"
                            family="Ionicons"
                            name="chevron-back-sharp"
                            size='medium'
                            color={Colors.black}
                        />
                    </TouchableWithoutFeedback> */}
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                    >
                        <Ionicons name="md-chevron-back-outline" size={30} color="black" />
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
                                style={[tw`p-2 rounded-full`, { backgroundColor: Colors.lightorange, width: wp('10%') }]}
                                className=''
                                onPress={() => { navigation.navigate('Chat') }}
                            >
                                {/* <Icon
                                    family="Ionicons"
                                    name="chatbubbles"
                                    size='small'
                                    color={Colors.orange}
                                /> */}
                                <Ionicons name="chatbubbles" size={20} color={Colors.orange} />
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