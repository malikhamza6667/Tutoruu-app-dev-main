import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity, SafeAreaView, Platform, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native'
import Details from "../../layouts/Details/Details";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import Colors from "../../../assets/Colors";

import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Input from "../../components/Input/Input";
import Avatar from "../../components/Avatar/Avatar";
const Messages = [
    {
        id: 0,
        date: "05-04-2023",
        mine: false,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 1,
        date: "05-04-2023",
        mine: true,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 2,
        date: "05-04-2023",
        mine: false,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 3,
        date: "05-04-2023",
        mine: true,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 4,
        date: "05-04-2023",
        mine: true,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 5,
        date: "05-04-2023",
        mine: false,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 6,
        date: "05-04-2023",
        mine: true,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
    {
        id: 7,
        date: "05-04-2023",
        mine: true,
        sender_image: 'https://i.pravatar.cc/300',
        text: "Lorem Ispum Dolar",
    },
]
type Props = {
    navigation?: any
}
const Chat: React.FC<Props> = ({ navigation }) => {
    const [message, setMessage] = useState('')




    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={{flex:1}}
    >
            <Details headerTitle="Chat">
               
                    <TouchableOpacity
                        style={{
                            flex: 0.15,
                            shadowColor: "gray",
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 2, height: 5 },
                            elevation: 5,
                            borderColor: Colors.white,
                            borderWidth: 2,
                            backgroundColor: Colors.white,
                        }}
                        onPress={() => {
                            navigation.navigate("StudentProfileScreen", { name: "Ragnar" });
                        }}
                        className=" py-2 px-4 flex-row "
                    >
                        <View className="justify-center">

                        <Avatar
                        size="large"
                        image="https://i.pravatar.cc/300"
                        showCap={false}
                        />
                        </View>
                        
                        <View className="px-3 justify-center">
                            <View className="flex-row">
                                <Text
                                    style={{ fontFamily: "PoppinsBold" }}
                                    className="text-xl mr-2 justify-between"
                                >
                                    Ragnar Lothbrok
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontFamily: "PoppinsMedium",
                                    textTransform: "uppercase",
                                }}
                                className="text-sm"
                            >
                                Online
                            </Text>
                        </View>
                    </TouchableOpacity>
             
                
                <View style={{ flex: 0.7, justifyContent: "space-evenly" }}>
       
        
        

<View style={[tw``,]}>

                    <FlatList
                    
                        data={Messages}
                        contentContainerStyle={{paddingVertical:hp('2%')}}
                        renderItem={({ item }) => {
                            return (
                                <ChatMessage
                                    date={item.date}
                                    mine={item.mine}
                                    sender_image={item.sender_image}
                                    text={item.text}
                                />
                            );
                        }}
                        keyExtractor={(item) => {
                            return item.id.toString();
                        }}
                    />
</View>


                </View>
                    <View style={[tw`self-center justify-center`, { flex:0.15}]}>
                        <Input
                            size="Xlarge"
                            value={message}
                            placeholder="Enter Message ..."
                            onChangeText={(text) => {
                                setMessage(text);
                            }}
                            icon="AntDesign arrowright 18 white"
                            iconBackground={Colors.orange}
                            iconPosition="right"
                        />
                    </View>
            </Details>
        </KeyboardAvoidingView>
    )
}

export default Chat





{/* <View className="flex[1] bg-red-200" style={[tw`justify-between`]}>
<KeyboardAvoidingView behavior="height">
  <ScrollView>
  


 <View style={[tw` justify-center`,{}]}>

  </View> 


 


  <View style={[tw`self-center justify-center`,{height: hp('20%')}]}>

  <Input
  size="Xlarge"
  
  value={message}
  placeholder="Enter Message ..."
  onChangeText={(text)=>{setMessage(text)}}
  icon="AntDesign arrowright 24 white"
  iconBackground={Colors.orange}
  iconPosition="right"
  />
  </View>

</ScrollView>
  </KeyboardAvoidingView>
  </View> */}