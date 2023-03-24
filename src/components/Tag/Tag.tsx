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

export const Tag: React.FC<TagProps> = ({ type,shape, icon, iconPosition, name, children }) => {
    const IconComponent = iconComponents[icon]; const [isPressed, setIsPressed] = useState(false);


    return (
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} testID='tag'>
            <View
                style={[
                    tw`rounded-md p-2.5 flex-row  justify-between  items-center `,
                    isPressed ? tw`bg-orange-200 ` : tw`bg-gray-200`,
                    shape === 'square' ? tw`rounded-lg` : tw`rounded-full`,
                ]}
            >
                <Text style={[
                    isPressed ? tw`text-orange-500` : tw`text-black`,
                ]}>
                    {children}
                </Text>
                {
                    icon && isPressed &&
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


