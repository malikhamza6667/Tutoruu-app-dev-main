import React from "react";

import {View,Image} from 'react-native'

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

const AuthHeader:React.FC=()=>{
    return(
        <View className='self-center' style={{height:hp('10%'),}}>
        <Image
            source={require('./../../assets/authlogo.png')}
            resizeMode='contain'
            // className='h-40 w-40'
            style={{
                height:hp('20'),
                width:wp('50'),
                resizeMode:'contain'
            }}
        />
    </View>
    )
}

export default AuthHeader