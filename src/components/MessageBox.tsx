import React from 'react'

import {View,Text,Image} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../../assets/Colors'

interface Props{
    color?: string
    directionRight?: boolean
    message: string
    image: string
    radiusRight?: number
    radiusLeft?: number

}


const MessageBox:React.FC<Props>=({color,directionRight,message,image,radiusLeft,radiusRight})=>{
    return(
        <View className=' p-2'
        style={{flexDirection:directionRight?"row-reverse":'row'}}
        >
          <View className=' px-2 py-1 justify-end' >
<Image
source={{uri: image}}
style={{height: hp('5%'),width: wp('10%')}}
className='rounded-full'
/>
          </View>
          <View 
       
          className=' p-2 py-5'
          style={{borderRadius: 10,
            backgroundColor:color?color:Colors.white,
            alignItems:'center',
            justifyContent:'center',
        borderBottomRightRadius: radiusRight?radiusRight: 10,
        borderBottomLeftRadius: radiusLeft?radiusLeft: 10,
        elevation:2

        }}
          >
<Text style={{fontFamily:'PoppinsRegular',textAlign:'justify',width:wp('75%'),marginHorizontal:5}}>
    {message}
</Text>
          </View>
        </View>
    )
}
export default MessageBox