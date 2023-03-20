import React from 'react';
import tw from 'twrnc';
import { Image, View, Style } from 'react-native';

type Props = {
    size: string;
    showCap: boolean;
    image: any;
};

export const Avatar: React.FC<Props> = ({ size, showCap, image }) => {
    const avatarStyles = [tw`rounded-full`];

    if (size === 'small') {
        avatarStyles.push(tw`w-8 h-8 `,);
    } else if (size === 'medium') {
        avatarStyles.push(tw`w-12 h-12`);
    } else if (size === 'large') {
        avatarStyles.push(tw`w-16 h-16`);
    }
    // Choose the appropriate cap style based on size prop value
    let capStyles: Style[] = [];
    if (size === 'small') {
        capStyles = [tw`absolute w-11 h-11 z-60`, { top: -7, right: 19 }];
    } else if (size === 'medium') {
        capStyles = [tw`absolute w-16.2 h-17 z-50`, { top: -13, right: 10 }];
    } else if (size === 'large') {
        capStyles = [tw`absolute w-22 h-22 z-60`, { top: -15, left: -6 }];
    }
    if (showCap) {
        const capImage = require('../../../assets/dpframe.png');
        // const capStylesLarge = [tw`absolute w-22 h-22 z-60`, { top: -15, left: -6 }];

        return (
            <View style={[tw` w-5rem flex items-center justify-center`]}>
                <Image source={image} style={[...avatarStyles]} resizeMode="contain" testID="avatarImage" />
                <Image source={capImage} style={[...capStyles]} resizeMode="contain" testID="capImage" />
            </View>
        );
    }

    return <Image source={image} style={[...avatarStyles]} resizeMode="contain" testID="avatarImage" />;
};



// export const Avatar: React.FC<Props> = ({ size, showCap, image }) => {
//     const avatarStyles = [tw`rounded-full`];

//     if (size === 'small') {
//         avatarStyles.push(tw`w-8 h-8`);
//     } else if (size === 'medium') {
//         avatarStyles.push(tw`w-12 h-12`);
//     } else if (size === 'large') {
//         avatarStyles.push(tw`w-16 h-16`);
//     }

//     let capStyles;

//     if (showCap) {
//         const capImage = require('../../../assets/dpframe.png');

//         if (size === 'large') {
//             capStyles = [tw`absolute w-64.8 h-64.8 z-50`, { right: 10, top: -13 }];
//         } else {
//             capStyles = [tw`absolute w-48 h-48 z-30`, { right: 0, top: 0 }];
//         }

//         return (
//             <View style={[tw`w-5rem flex items-center justify-center`]}>
//                 <Image source={image} style={[...avatarStyles]} resizeMode="contain" testID="avatarImage" />
//                 <Image source={capImage} style={[...capStyles]} testID="capImage" />
//             </View>
//         );
//     }

//     return <Image source={image} style={[...avatarStyles]} testID="avatarImage" />;
// };

