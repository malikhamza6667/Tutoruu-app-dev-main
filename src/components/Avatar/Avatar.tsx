import React from 'react';
import tw from 'twrnc';
import { Image, View } from 'react-native';

type Props = {
    size: 'small'|'medium'|'large';
    showCap: boolean;
    image: any;
};

const Avatar: React.FC<Props> = ({ size, showCap, image }) => {
    let avatarStyles = "rounded-full";
    let marginBottom=0
let marginRight=0
    if (size === 'small') {
        avatarStyles= "rounded-full  w-8 h-8 mr[-3.5] mb[-3] "
       
        marginRight=-3.5
        marginBottom=-3
    } else if (size === 'medium') {
        avatarStyles= "rounded-full  w-12 h-12 mr[-4] mb[-5] "
        marginRight=-4.5
        marginBottom=-4
      
    } else if (size === 'large') {
        avatarStyles= "rounded-full  w-16 h-16 mr[-6] mb[-7]"
        marginRight=-5
        marginBottom=-5.5
       
    }
    // Choose the appropriate cap style based on size prop value
    let capStylesTailwind='absolute w-11 h-11 '
   
    if (size === 'small') {
        capStylesTailwind='absolute w-11 h-11 ' 
       
    } else if (size === 'medium') {
        capStylesTailwind='absolute w-16.2 h-17 ' 
      
    } else if (size === 'large') {
        capStylesTailwind='absolute w-22.5 h-22.5 ' 
        
      
    }
    const capImage = require('../../../assets/dpframe.png');
    return(
        <View>

            {
            showCap ?
            (<View style={[tw` w-5rem  items-center justify-center`]}>
            <Image
       
             source={{uri:image}} style={[tw`${avatarStyles}`,{marginBottom:marginBottom,marginRight:marginRight}]} resizeMode="contain" testID="avatarImage" />
            <Image source={capImage}
            
            
            style={[tw`${capStylesTailwind}`,{zIndex:1}]} resizeMode="contain" testID="capImage" />
        </View>)
        :
        <Image source={{uri:image}} style={tw`${avatarStyles}`} resizeMode="contain" testID="avatarImage" />
           }
        </View>

    )

};

export default Avatar



