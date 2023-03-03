import React from 'react'

import {View,Text} from 'react-native'
interface Props{
    navigation: any
}
const BAPScreen:React.FC<Props>=({navigation})=>{

    return(
        <View>
            <Text> This Is BAP Screen</Text>
           </View>
    )
}

export default BAPScreen