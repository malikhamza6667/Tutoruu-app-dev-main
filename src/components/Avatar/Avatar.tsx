import React from 'react';
import tw from 'twrnc';
import { Image, View } from 'react-native';

type Props = {
    size: 'small' | 'medium' | 'large';
    showCap: boolean;
    image: string;
};

const Avatar: React.FC<Props> = ({ size, showCap, image }) => {
    let avatarStyles = "rounded-full";
    let marginBottom = 0
    let marginRight = 0
    if (size === 'small') {
        avatarStyles = "rounded-full  w-8 h-8  "

        marginRight = -3.5
        marginBottom = -3
    } else if (size === 'medium') {
        avatarStyles = "rounded-full  w-12 h-12  "
        marginRight = -4.5
        marginBottom = -4

    } else if (size === 'large') {
        avatarStyles = "rounded-full  w-[18.2] h-[18.2]"
        marginRight = -5
        marginBottom = -10

    }
    // Choose the appropriate cap style based on size prop value
    let capStylesTailwind = 'absolute w-11 h-11 '

    if (size === 'small') {
        capStylesTailwind = 'absolute w-11 h-11 '

    } else if (size === 'medium') {
        capStylesTailwind = 'absolute w-16 h-16 '

    } else if (size === 'large') {
        capStylesTailwind = 'absolute w-[25] h-[25] '


    }
    const capImage = require('../../../assets/dpframe.png');
    return (
        <View>

            {
                showCap ?
                    (<View style={[tw` w-5rem  items-center justify-center`]}>
                        <Image

                            source={{ uri: image }} style={[tw`${avatarStyles}`, { marginBottom: marginBottom, marginRight: marginRight }]} testID="avatarImage" />
                        <Image source={ capImage }


                            style={[tw`${capStylesTailwind}`, { zIndex: 1 }]} testID="capImage" />
                    </View>)
                    :
                    <Image source={{ uri: image }} style={tw`${avatarStyles}`} testID="avatarImage" />
            }
        </View>

    )

};

export default Avatar



