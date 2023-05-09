
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from '../Icon/Icon';

type TagProps = {
    type: 'primary' | 'secondary' | 'neutral';
    name?: string
    shape?: 'round' | 'square';
    icon?: string;
    iconPosition?: 'left' | 'right';
    onPress?: () => void;
    isPressed?: boolean
    children?: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({
    type = 'neutral',
    shape = 'round',
    icon,
    name,
    isPressed,
    iconPosition = 'left',
    onPress,
    children,
}) => {
    const renderIcon = () => {
        if (!icon) {
            return null;
        }

        return (
            <View
                style={[
                    tw`px-2 mx-0.5`
                ]}
                testID='tag-icon'
            >

                <Icon
                    family='AntDesign'
                    name='caretdown'
                    onPress={() => console.log('icon clicked')}
                    size='small'
                    color='orange'

                />
            </View>
        );
    };

    const containerStyle = tw`${type === 'primary' ? 'bg-orange-200' : type === 'neutral' ? 'bg-gray-200' : 'bg-white'}
    ${shape === 'round' ? 'rounded-full' : 'rounded-md'}

    ${type === 'neutral' ? 'border-gray-400' : 'border-transparent'}
    px-3 py-1 mx-0.5
    flex
    ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'}
    items-center`;

    const textStyle = tw`text-base ${type === 'primary' ? 'text-orange-500' : 'text-black'}`;

    return (
        <TouchableOpacity onPress={onPress} testID='tag-container' >
            <View style={containerStyle}>
                {renderIcon()}
                <Text style={[textStyle, { fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }]}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Tag;
