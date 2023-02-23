import React from 'react'

import {TouchableOpacity,Text,View ,Image} from 'react-native'
import Colors from '../../assets/Colors'

interface Props{
    item: any,
    onPress?: () => void
}
const ChatCard:React.FC<Props>=({item,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: item.messageNo? Colors.lightorange:Colors.white }}
        className='px-2 flex-row items-center justify-between'
    >
        <View
            className='p-2 flex-row items-center'
        >


            <Image

                source={require('.././../assets/dp.jpg')}
                className='rounded-full'
                resizeMode='contain'
            />
            <View className='px-2'>
                <Text style={{ fontFamily: 'PoppinsRegular' }}>{item.Name}</Text>
                <Text style={{ fontFamily: 'Poppins' }}>{item.Message}</Text>
            </View>

        </View>
        <View className='p-1 gap-1  mx-2'>
            <Text style={{ fontFamily: 'Poppins' }}
                className='text-sm'
            >{item.Time}</Text>
            {
item.messageNo  &&
            <View
                className='self-end justify-center items-center px-2.5 py-0.5 rounded-full'
                style={{ backgroundColor: Colors.orange }}>
<Text
                    style={{ fontFamily: 'PoppinsMedium' }}
                    className=' text-white '
                >{item.messageNo}</Text>
            </View>
            }
        </View>

    </TouchableOpacity>
    )
}
export default ChatCard