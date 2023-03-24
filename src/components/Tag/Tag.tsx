import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import {
    AntDesign,
    Ionicons,
    FontAwesome,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5,
    MaterialIcons,
    Feather
} from '@expo/vector-icons';
type TagProps = {
    isPressed: boolean
    width: any;
    type: 'primary' | 'neutral'
    shape: 'round' | 'square';
    icon: 'FontAwesome' | 'Feather' | 'AntDesign' | 'Ionicons' | 'Entypo' | 'MaterialCommunityIcons' | 'FontAwesome5' | 'MaterialIcons';
    iconPosition?: 'left' | 'right';
    name: string;
    children: React.ReactNode;

};
const iconComponents = {
    FontAwesome: FontAwesome,
    Feather: Feather,
    AntDesign: AntDesign,
    Ionicons: Ionicons,
    Entypo: Entypo,
    MaterialCommunityIcons: MaterialCommunityIcons,
    MaterialIcons: MaterialIcons,
    FontAwesome5: FontAwesome5,
};

export const Tag: React.FC<TagProps> = ({ isPressed, width, type, shape, icon, iconPosition, name, children }) => {
    const IconComponent = iconComponents[icon];
    // const [isPressed, setIsPressed] = useState(false);


    return (
        <TouchableOpacity testID='tag'>
            <View
                style={[{ width: width },
                tw`rounded-md p-2 px-3 flex-row  justify-between  items-center `,
                isPressed ? tw`bg-orange-100 ` : tw`bg-gray-200`,
                shape === 'square' ? tw`rounded-lg` : tw`rounded-full`,
                type === 'primary' ? tw`bg-orange-200` : tw`bg-gray-200`
                ]}
            >
                <Text style={[
                    type === 'primary' ? tw`text-orange-500` : tw`text-black`, { fontFamily: 'PoppinsMedium' }
                ]}>
                    {children}
                </Text>
                {
                    icon && isPressed == true &&
                    <IconComponent
                        name={name}
                        size={10}
                        color='orange'
                        style={[
                            tw`p-1`
                        ]}
                    />
                }
            </View>
        </TouchableOpacity>
    );
};


