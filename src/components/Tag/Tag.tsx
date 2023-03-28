// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import tw from 'twrnc';
// import {
//     AntDesign,
//     Ionicons,
//     FontAwesome,
//     Entypo,
//     MaterialCommunityIcons,
//     FontAwesome5,
//     MaterialIcons,
//     Feather
// } from '@expo/vector-icons';
// type TagProps = {
//     isPressed: boolean
//     width: any;
//     type: 'primary' | 'neutral'
//     shape: 'round' | 'square';
//     icon: 'FontAwesome' | 'Feather' | 'AntDesign' | 'Ionicons' | 'Entypo' | 'MaterialCommunityIcons' | 'FontAwesome5' | 'MaterialIcons';
//     iconPosition?: 'left' | 'right';
//     name: string;
//     children: React.ReactNode;

// };
// const iconComponents = {
//     FontAwesome: FontAwesome,
//     Feather: Feather,
//     AntDesign: AntDesign,
//     Ionicons: Ionicons,
//     Entypo: Entypo,
//     MaterialCommunityIcons: MaterialCommunityIcons,
//     MaterialIcons: MaterialIcons,
//     FontAwesome5: FontAwesome5,
// };

// export const Tag: React.FC<TagProps> = ({ isPressed, width, type, shape, icon, iconPosition, name, children }) => {
//     const IconComponent = iconComponents[icon];
//     // const [isPressed, setIsPressed] = useState(false);


//     return (
//         <TouchableOpacity testID='tag'>
//             <View
//                 style={[{ width: width },
//                 tw`rounded-md p-2 px-3 flex-row  justify-between  items-center `,
//                 isPressed ? tw`bg-orange-100 ` : tw`bg-gray-200`,
//                 shape === 'square' ? tw`rounded-lg` : tw`rounded-full`,
//                 type === 'primary' ? tw`bg-orange-200` : tw`bg-gray-200`
//                 ]}
//             >
//                 <Text style={[
//                     type === 'primary' ? tw`text-orange-500` : tw`text-black`, { fontFamily: 'PoppinsMedium' }
//                 ]}>
//                     {children}
//                 </Text>
//                 {
//                     icon && isPressed == true &&
//                     <IconComponent
//                         name={name}
//                         size={10}
//                         color='orange'
//                         style={[
//                             tw`p-1`
//                         ]}
//                     />
//                 }
//             </View>
//         </TouchableOpacity>
//     );
// };


// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// type TagProps = {
//   type: 'primary' | 'secondary' | 'neutral';
//   shape: 'round' | 'square';
//   icon?: string;
//   iconPosition?: 'left' | 'right';
//   onPress?: () => void; 
//   children: React.ReactNode;
// };

// const Tag: React.FC<TagProps> = ({
//   type = 'neutral',
//   shape = 'round',
//   icon,
//   iconPosition = 'left',
//   onPress,
//   children,
// }) => {
//   const renderIcon = () => {
//     if (!icon) {
//       return null;
//     }

//     return (
//       <Icon
//         name={icon}
//         size={16}
//         color={type === 'primary' ? 'white' : 'black'}
//         style={{ marginLeft: iconPosition === 'right' ? 8 : 0, marginRight: iconPosition === 'left' ? 8 : 0 }}
//       />
//     );
//   };

//   const containerStyle = {
//     backgroundColor: type === 'primary' ? '#007aff' : type === 'secondary' ? '#8e8e93' : 'white',
//     borderRadius: shape === 'round' ? 16 : 4,
//     borderWidth: 1,
//     borderColor: type === 'neutral' ? '#8e8e93' : 'transparent',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
//     alignItems: 'center',
//   };

//   const textStyle = {
//     color: type === 'primary' ? 'white' : 'black',
//     fontSize: 16,
//   };

//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//       <View style={containerStyle}>
//         {renderIcon()}
//         <Text style={textStyle}>{children}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Tag;


import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from '../Icon/Icon';

type TagProps = {
    type: 'primary' | 'secondary' | 'neutral';
    shape: 'round' | 'square';
    icon?: string;
    iconPosition?: 'left' | 'right';
    onPress?: () => void;
    children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({
    type = 'neutral',
    shape = 'round',
    icon,
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
                    tw`px-2`
                ]}
                testID='tag-icon'
            >

                <Icon
                    family='FontAwesome'
                    name='search'
                    onPress={() => console.log('icon clicked')}
                    size='small'
                    color='orange'

                />
            </View>
        );
    };

    const containerStyle = tw`${type === 'primary' ? 'bg-orange-300' : type === 'neutral' ? 'bg-gray-200' : 'bg-white'}
    ${shape === 'round' ? 'rounded-full' : 'rounded-md'}
    border
    ${type === 'neutral' ? 'border-gray-400' : 'border-transparent'}
    px-4 py-2
    flex
    ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'}
    items-center`;

    const textStyle = tw`text-base ${type === 'primary' ? 'text-orange-500' : 'text-black'}`;

    return (
        <TouchableOpacity onPress={onPress} testID='tag-container' >
            <View style={containerStyle}>
                {renderIcon()}
                <Text style={textStyle}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Tag;
