import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity, SafeAreaView, Platform, ScrollView, FlatList, KeyboardAvoidingView, SectionList } from 'react-native'
import Details from "../../layouts/Details/Details";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import Colors from "../../../assets/Colors";

import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Input from "../../components/Input/Input";
import Avatar from "../../components/Avatar/Avatar";
const Messages = [
  { 
    
    headerTitle:"11/12",
    data:[ {
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
    },]},
   
    { 
    
        headerTitle:"Yesterday",
        data:[ {
            id: 0,
            date: "06-04-2023",
            mine: false,
            sender_image: 'https://i.pravatar.cc/300',
            text: "Lorem Ispum Dolar",
        },
        {
            id: 1,
            date: "06-04-2023",
            mine: true,
            sender_image: 'https://i.pravatar.cc/300',
            text: "Lorem Ispum Dolar",
        },]},
        { 
    
            headerTitle:"Today",
            data:[ {
                id: 0,
                date: "07-04-2023",
                mine: false,
                sender_image: 'https://i.pravatar.cc/300',
                text: "Lorem Ispum Dolar",
            },
            {
                id: 1,
                date: "07-04-2023",
                mine: true,
                sender_image: 'https://i.pravatar.cc/300',
                text: "Lorem Ispum Dolar",
            },]},
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
                        style={[tw`py-2 px-4 flex-row`,{
                            flex: 0.15,
                            shadowColor: "gray",
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 2, height: 5 },
                            elevation: 5,
                            borderColor: Colors.white,
                            borderWidth: 2,
                            backgroundColor: Colors.white,
                        }]}
                        onPress={() => {
                            navigation.navigate("StudentProfileScreen", { name: "Ragnar" });
                        }}
                        
                    >
                        <View style={tw`justify-center`}>

                        <Avatar
                        size="large"
                        image="https://i.pravatar.cc/300"
                        showCap={false}
                        />
                        </View>
                        
                        <View  style={[tw`px-3 justify-center`]}>
                            <View  style={[tw`flex-row`]}>
                                <Text
                                    style={[tw`text-xl mr-2 justify-between`,{ fontFamily: "PoppinsBold" }]}
                                    
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

                    {/* <FlatList
                    
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
                    /> */}
                    <SectionList
                    
                    sections={Messages}
                    renderSectionHeader={({section: {headerTitle}}) => (
                        <View
                        style={[tw`rounded-full self-center px-3 py-2`,{backgroundColor:Colors.lightorange}]}
                        >

                        <Text style={[tw`text-sm self-center`,{color:Colors.orange,fontFamily:'PoppinsMedium'}]}>{headerTitle}</Text>
                        </View>
                      )}
                      renderItem={({item})=>{
                        return(
                            <ChatMessage
                            date={item.date}
                            mine={item.mine}
                            sender_image={item.sender_image}
                            text={item.text}
                        />
                        )
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