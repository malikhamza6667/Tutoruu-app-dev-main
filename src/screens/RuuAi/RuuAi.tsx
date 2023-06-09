import React, { useState,useEffect } from 'react';
import { GiftedChat, IMessage, InputToolbar,Bubble,Send, Avatar as AVATAR, Composer } from 'react-native-gifted-chat';
import { View,Text,Image,TextInput, TouchableOpacity, StyleSheet,ScrollView,KeyboardAvoidingView, SafeAreaView, Platform  } from 'react-native';


import Avatar from '../../components/Avatar/Avatar';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { ImageAdress } from '../DummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../assets/Colors';
import Details from '../../layouts/Details/Details';
import tw from 'twrnc';


interface Props{
    navigation: any,
    route: any
}

  
 
const CustomInputToolbar = (props: any) => {
    return (
      <InputToolbar 
      {...props}

      containerStyle={{
        
        
        borderTopWidth: 2,
        borderTopColor:Colors.orange,
 marginTop:hp('1%'),
 alignSelf:'center',
//  height:hp('7%'),
       borderWidth:2,
        marginHorizontal:hp('1%'),
        padding:3,
        marginBottom:hp('4%'),
borderColor:Colors.orange,
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

        renderTime={() => null} 
containerStyle={{
    left:{

   
        justifyContent:'center',
        
        marginBottom:hp('3%')
     
    },
    right:{
     
   
      justifyContent:'center',
      
      marginBottom:hp('3%')
    }
}}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: Colors.white,
          
            shadowColor: 'gray',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 5 },
            elevation: 10,
            paddingVertical:hp('2%'),
            paddingHorizontal:hp('1%'),
           justifyContent:'center',
           alignItems:'center',
            borderBottomLeftRadius:15,
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
          borderBottomRightRadius:0
            

          },
          left:{
            backgroundColor: 'rgba(254, 131, 3, 0.6)',
            paddingVertical:hp('2%'),
            paddingHorizontal:hp('1%'),
            shadowColor: 'gray',
            shadowOpacity: 0.2,
            shadowOffset: { width: 2, height: 5 },
            elevation: 10,
          borderBottomRightRadius:15,
          borderTopRightRadius:15,
          borderTopLeftRadius:15,
        borderBottomLeftRadius:0
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
      containerStyle={{justifyContent:'center',paddingHorizontal:hp('1.5%')}}
      >
        <View style={[tw`h-10 w-10 justify-center items-center rounded-full`,{backgroundColor:Colors.orange}]}>

       <AntDesign name='arrowright' size={20} color={'white'}/>
        </View>
      </Send>
    );
  }
  function renderAvatar(props:any) {
    return (
    <AVATAR
    {...props}
    imageStyle={{
        left:{
        
            height:hp('6%'),
            width:wp('12%'),
            borderRadius:30,
        }
    }}
    containerStyle={
       {
        left:{
       
          margin:3,
          justifyContent:'flex-end',
          padding:2,
      
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


const RuuAiScreen: React.FC<Props> = ({navigation,route}) => {



  const [messages, setMessages] = useState<IMessage[]>([]);
  const[showModal,setShowModal]=useState(false)

  const onSend = (newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello this is Ruu, I’m here to help you with your academics in university. Ask me  anything!",
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
  //  

         <Details headerTitle='RUU AI'>

 

       <View style={[tw`flex-1 justify-between`]}>
  <View
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
                       
                        
                    >
                        <View style={tw`justify-center`}>

                        <Image
                        style={{height:hp('10%'),width:wp('20%'),borderRadius:9999}}
                        source={require('./../../../assets/ruuai.png')}
                        resizeMode='contain'
                        />
                        </View>
                        
                        <View  style={[tw`px-3 justify-center`]}>
                            <View  style={[tw`flex-row`]}>
                            <Text style={[tw`text-xl mr-2 justify-between`,{fontFamily:'PoppinsBold'}]} >RUU</Text>
             <Text  style={[tw`text-xl justify-between`,{fontFamily:'PoppinsBold',color:Colors.orange}]} >AI</Text>
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
                    </View>
      
           
        
      <View style={{flex:0.85,justifyContent:'space-evenly'}}>
   
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
    
    messagesContainerStyle={{ paddingBottom:hp('10%')}}
    renderComposer={renderComposer}
   
    maxComposerHeight={hp('30%')}
          showUserAvatar
       
     alwaysShowSend  
     minInputToolbarHeight={50}
     inverted={true}
   
         />

  
     
            


        
           
         </View>
        </View>   
     
         </Details>

  

         
     
  );
};

export default RuuAiScreen;



{/* <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
  
// style={{flex:1}}
//   > */}