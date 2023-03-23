
import React from "react";

import {View,Text, Image,StyleSheet} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import Avatar from "../Avatar/Avatar";

{/* <ChatMessage 
text='Hello world'
 date='2020-01-01'
 sender_image='https://i.pravatar.cc/300'
 mine={true} /> */}


type Props={
    mine: boolean
    date: string
    sender_image: string
    text: string
}

 const ChatMessage:React.FC<Props>=({mine, date,sender_image,text})=>{
    return(
        <View >
            {
                mine ? 
              (  <View style={[tw`flex-row items-end justify-end m-3`,{}]}>



        <View style={[tw`p-3 mx-2 rounded-lg justify-center`,styles.mine,styles.container]}>
            <Text style={{fontFamily:'PoppinsMedium'}}>{text}</Text>
        </View>
        <View testID="avatar" >
        <Avatar
showCap={false}
image={sender_image}
size='small'
/>
            </View>
                </View>)

        :
        (  <View  style={[tw`flex-row items-end justify-start m-3`,{}]}>
<View  testID="avatar">
        <Avatar
        showCap={false}
        image={sender_image}
        size='small'
        />
    </View>
        
                <View style={[tw`p-3 mx-2 rounded-lg justify-center`,styles.notMine,styles.container]}>
                    <Text style={{fontFamily:'PoppinsMedium'}}>{text}</Text>
                </View>
                        </View>)

            }


        </View>
    )
 }
 export default ChatMessage

 const styles= StyleSheet.create({
    container:{
        elevation:3,
        bottom: hp('1%'),
        maxHeight:hp('15%'),
        height:hp('8%'),
    },

    mine:{
       
        backgroundColor:Colors.white,
         width: wp('60%'),
         alignSelf:'flex-end',
        borderBottomRightRadius:0
    },
    notMine:{
        backgroundColor:Colors.lightorange,
        width: wp('60%'),
        alignSelf:'flex-start',
       borderBottomLeftRadius:0
    }
 })