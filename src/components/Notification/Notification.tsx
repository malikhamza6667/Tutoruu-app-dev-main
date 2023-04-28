import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

interface NotificationProps {
    text: string;
    image: string;
    is_read: boolean;
    link: string
    onClick?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ text, image, is_read, onClick, link }) => {
    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
    };
    const handlePress = (url: string) => {
        Linking.openURL(url);
    };

    const notificationStyle = tw`flex-row items-center p-2 py-3`;
    const notificationBackgroundStyle = is_read ? tw`bg-white` : tw`bg-orange-200`;
    const notificationTextStyle = is_read
        ? tw`font-semibold text-lg mb-1 text-black w-57 `
        : tw`font-semibold text-lg mb-1 text-orange-500 w-57`
    const notificationImageStyle = tw`w-12 h-12 rounded-full mx-1 bg-red-300`;
    const timeTextStyle = tw`text-gray-800  p-1`;
    return (
        <TouchableOpacity onPress={() => { handlePress(link) }} activeOpacity={0.8} testID="notification" style={{}}>
            <View style={[notificationStyle, notificationBackgroundStyle, {alignItems:'center', justifyContent:'center'}]}>

                <View
                    style={{ width: wp('98'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}
                >

                    <Image source={{ uri: image }} style={notificationImageStyle} testID='notification-image' />
                    <View style={tw` flex-row`}>
                        <Text
                            testID='notification-text'
                            style={[tw``, notificationTextStyle, { fontFamily: 'PoppinsMedium' }]}
                        >{text}</Text>
                        <Text style={timeTextStyle}>1 hr ago</Text>
                    </View>
                </View>



            </View>
        </TouchableOpacity>
    );
};
