

import React from "react";

import {View,Text, TouchableOpacity} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import Avatar from "../Avatar/Avatar";

type User={
    name: string
    image: string
    username: string
}

type Props={
user: User
last_message: string
last_message_date: string
unread_count: number
onPress?: ()=>void
}

const ChatPreview:React.FC<Props>=({
    user,
    last_message,
    last_message_date,
    unread_count,
    onPress
})=>{
   
     
      
    return(
<TouchableOpacity 
testID="chat-preview"
onPress={onPress}
style={[tw`flex-row justify-between px-3 my-0.1`,{height:hp('8%'),backgroundColor:unread_count==0? Colors.gray:Colors.lightorange}]}>
   <View className="flex-row items-center self-center">
   <Avatar
   size='small'
   image={user.image}
   showCap={false}
   />
   <View style={[tw`mx-2`]}>

    <Text style={[tw`text-base`,{fontFamily:'PoppinsRegular'}]}>{user.name}</Text>
    <Text  style={[tw`text-sm `,{fontFamily:'Poppins'}]}>{last_message.length < 15? last_message: last_message.split(' ').slice(0, 3).join(' ') + '...'}</Text>
   </View>
   </View>
   <View style={[tw`justify-between items-center my-1`]}>
    <Text numberOfLines={1}  style={[tw`text-sm `,{fontFamily:'Poppins'}]}>{last_message_date}</Text>
    {
        unread_count > 0 &&
        <View style={[tw`py-1 px-2.5 items-center rounded-full`,{backgroundColor:Colors.orange}]}>

            <Text testID="unread-count" style={[tw`text-sm text-white`,{fontFamily:'PoppinsMedium'}]}>{unread_count.toString()}</Text>
            </View>
    }
   
   </View>
</TouchableOpacity>
    )
}

export default ChatPreview