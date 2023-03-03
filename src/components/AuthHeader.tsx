import React from "react";

import {View,Image} from 'react-native'

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

const AuthHeader:React.FC=()=>{
    return(
        <View className='self-center' style={{height:hp('10%'),top:hp('2%')}}>
        <Image
            source={require('./../../assets/authlogo.png')}
            resizeMode='contain'
            className='h-40 w-40'
        />
    </View>
    )
}

export default AuthHeader