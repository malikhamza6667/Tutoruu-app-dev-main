import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface NotificationProps {
    text: string;
    image: string;
    link: string;
    is_read: boolean;
    onClick?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ text, image, link, is_read, onClick }) => {
    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const notificationStyle = tw`flex-row items-center p-2 mb-2`;
    const notificationBackgroundStyle = is_read ? tw`bg-orange-200` : tw`bg-white`;
    const notificationTextStyle = is_read
        ? tw`font-semibold text-lg mb-1 text-orange-500 w-62 `
        : tw`font-semibold text-lg mb-1 text-black w-62 `;
    const notificationImageStyle = tw`w-12 h-12 rounded-full mr-4`;
    const timeTextStyle = tw`text-gray-800  p-1`;
    return (
        <TouchableOpacity onPress={handleOnClick} activeOpacity={0.8} testID="notification">
            <View style={[notificationStyle, notificationBackgroundStyle]}>
                <Image source={{ uri: image }} style={notificationImageStyle} />
                <View style={tw` flex-row`}>
                    <Text style={notificationTextStyle}>{text}</Text>
                    {/* <Text style={notificationLinkStyle}>{link}</Text> */}
                    <Text style={timeTextStyle}>1 hr ago</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
