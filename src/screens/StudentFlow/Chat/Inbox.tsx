import React, { useState,useEffect } from 'react';
import { GiftedChat, IMessage, InputToolbar,Bubble,Send, Avatar, Composer } from 'react-native-gifted-chat';
import { View,Text,Image,TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import Header from '../../../components/Header';
import Colors from '../../../../assets/Colors';

interface Props{
    navigation: any,
    route: any
}

const CustomInputToolbar = (props: any) => {
    return (
      <InputToolbar 
      {...props}

      containerStyle={{
        
        backgroundColor: "white",
        borderTopWidth: 2,
        borderTopColor:Colors.gray,
 marginTop:5,
 alignSelf:'center',
 
       borderWidth:2,
        marginHorizontal:10,
        padding:3,
        marginBottom:30,
borderColor:Colors.gray,
        borderRadius: 30,
              }}
            
              
              />
        
        
  
    );
  };
  const renderBubble:React.FC=(props:any)=> {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
containerStyle={{
    left:{
    
    margin:3,
        justifyContent:'center',
        padding:2,
     
    },
    right:{
        margin:3,

    
        justifyContent:'center',
        padding:2 
    }
}}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: Colors.white,
            
            shadowColor: 'gray',
            shadowOpacity: 0.2,
            shadowOffset: { width: 2, height: 5 },
            elevation: 2,
          
            

          },
          left:{
            backgroundColor: Colors.lightorange,
            padding:10,
            shadowColor: 'gray',
            shadowOpacity: 0.2,
            shadowOffset: { width: 2, height: 5 },
            elevation: 2,
          
        
          }
        }}
       textStyle={{right: {
        color: Colors.black
       }}}
      />
    );
  }
  function renderSend(props:any) {
    return (
      <Send {...props}
      containerStyle={{justifyContent:'center',padding:3}}
      >
        <View>
        <Image
        source={require('./../../../../assets/arrowright.png')}
        className='h-10 w-10 rounded-full'
        />
        </View>
      </Send>
    );
  }
  function renderAvatar(props:any) {
    return (
    <Avatar
    {...props}
    imageStyle={{
        left:{
            height:40,
            width:40,
            borderRadius:30,
        }
    }}
    containerStyle={
       {
        left:{
           height: 75,
           justifyContent:'center',
           padding:2,
            bottom:15
        }
       }
    }
    />
    );
  }
  function renderComposer(props:any) {
    return (
        <Composer
        {...props}
              
        />
   
    );
  }


const InboxScreen: React.FC<Props> = ({navigation,route}) => {

const {name}=route.params

  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSend = (newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amit?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  return (
    <View className='flex-1 bg-white'>
        <Header headerTitle='Chats'/>
        <View 
           style={{  shadowColor: 'gray',
           shadowOpacity: 0.2,
           shadowOffset: { width: 2, height: 5 },
           elevation: 5,backgroundColor:Colors.white}}
        className=' py-4 px-5 flex-row'>
            
        <Image
        source={require('../../../../assets/dp.jpg')}
        resizeMode='contain'
        className='h-20 w-20 rounded-full'
        />
        <View className='px-3 justify-center'   >
        <Text style={{fontFamily:'PoppinsBold'}} className='text-xl'>{name}</Text>
      
        <Text style={{fontFamily:'PoppinsMedium',textTransform:'uppercase'}} className='text-sm'>Online</Text>

        

        </View>
        </View>
      <GiftedChat
         messages={messages}
         onSend={onSend}
         user={{
           _id: 1,
         }}
         
         renderInputToolbar={CustomInputToolbar}
       renderBubble={renderBubble}
       renderSend={renderSend}
renderAvatar={renderAvatar}
messagesContainerStyle={{ paddingBottom:80,}}
renderComposer={renderComposer}
       showUserAvatar
    
  alwaysShowSend   
      />
    </View>
  );
};

export default InboxScreen;
