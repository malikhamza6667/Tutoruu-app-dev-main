import React from "react";
import {View,Text,FlatList,SafeAreaView} from 'react-native'
import ChatCard from "../../../components/ChatCard";
import Header from "../../../components/Header";
import Spacer from "../../../components/Spacer";
import { ChatMessages, ReadMessages } from "../DummyData";

interface Props{
    navigation : any
}

const ChatScreen:React.FC<Props>=({navigation})=>{
    return(
        <SafeAreaView className="flex-1 bg-white">

       
         
           <View className=" justify-evenly flex-1">
           <Header headerTitle="Chats"/>
            <View >
                <Text className="text-base  px-5" style={{fontFamily:'PoppinsMedium'}}>Inbox</Text>
                <FlatList
                data={ChatMessages}
                renderItem={({item})=>{
                    return(
                        <View className="" >
                            <ChatCard onPress={()=>{navigation.navigate('InboxScreen',{
                                name: item.Name
                            })}} item={item}/>
                          
                            </View>
                    )
                }}
                keyExtractor={(item)=>{return item.id.toString()}}
                />
            </View>
            <View >
                <Text className="text-base  px-5" style={{fontFamily:'PoppinsMedium'}}>This Week</Text>
                <FlatList
                data={ReadMessages}
                renderItem={({item})=>{
                    return(
                        <View className="" >
                            <ChatCard item={item}/>
                          
                            </View>
                    )
                }}
                keyExtractor={(item)=>{return item.id.toString()}}
                />
            </View>
            <View >
                <Text className="text-base  px-5" style={{fontFamily:'PoppinsMedium'}}>Earlier</Text>
                <FlatList
                data={ReadMessages}
                renderItem={({item})=>{
                    return(
                        <View className="" >
                            <ChatCard item={item}/>
                          
                            </View>
                    )
                }}
                keyExtractor={(item)=>{return item.id.toString()}}
                />
            </View>
           </View>
        
        </SafeAreaView>
    )
}
export default ChatScreen