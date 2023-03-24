import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
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
import Colors from '../../../assets/Colors';
type IconProps = {
    family: 'FontAwesome' | 'Feather' | 'AntDesign' | 'Ionicons' | 'Entypo' | 'MaterialCommunityIcons' | 'FontAwesome5' | 'MaterialIcons';
    name: string;
    color: string
    size: 'small' | 'medium' | 'large'|'xsmall';
    onPressIcon?:()=>void
} & TouchableOpacityProps;

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
const iconSizes = {
    xsmall:14,
    small: 20,
    medium: 30,
    large: 40,
};

export const Icon: React.FC<IconProps> = ({ name, size, onPress, color,family, ...rest }) => {
    const IconComponent = iconComponents[family];
    const iconSize = iconSizes[size];
    return (
        <TouchableOpacity onPress={onPress} {...rest}  testID="icon">
            <IconComponent name={name} size={iconSize} color={color} />
        </TouchableOpacity>
    );
};
