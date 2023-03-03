import React, { useState,useEffect } from 'react';
import { GiftedChat, IMessage, InputToolbar,Bubble,Send, Avatar, Composer } from 'react-native-gifted-chat';
import { View,Text,Image,TextInput, TouchableOpacity, StyleSheet, SafeAreaView, AsyncStorage, Modal  } from 'react-native';
import Header from '../../../components/Header';
import Colors from '../../../../assets/Colors';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RUUICARD from '../../../components/RuuiCard';
import { StatusBar } from 'expo-status-bar';

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

        renderTime={() => null} 
containerStyle={{
    left:{
    backgroundColor:Colors.white,
   
        justifyContent:'center',
        
        marginBottom:25
     
    },
    right:{
     
   
      justifyContent:'center',
      
      marginBottom:25
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
            padding:15,
           justifyContent:'center',
           alignItems:'center',
            borderBottomLeftRadius:15,
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
          borderBottomRightRadius:0
            

          },
          left:{
            backgroundColor: 'rgba(254, 131, 3, 0.6)',
            padding:15,
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
        
            height:50,
            width:50,
            borderRadius:30,
        }
    }}
    containerStyle={
       {
        left:{
        height:150,
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


const InboxScreenRunAI: React.FC<Props> = ({navigation,route}) => {

const[showRuuiCard,setShowRuuiCard]=useState(false)
useEffect(()=>{
  const isNewUser=()=>{
    AsyncStorage.getItem('RuuiFirstTime').then((val)=>{
      console.log(val)
      if(val=='FirstTimeCompleted'){
          setShowRuuiCard(false)
      }
      else{
          setShowRuuiCard(true)
      }
  })
  }
  isNewUser()
    return console.log('cleanUp')
},[])

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
    <SafeAreaView className='flex-1 justify-center'> 

<View className='flex-1 bg-white justify-evenly'>
  <Modal
  visible={showRuuiCard}
  transparent={true}
  statusBarTranslucent={true}
  style={{flex:1, }}
  onRequestClose={()=>{setShowRuuiCard(false)}}

  >
     <StatusBar style='inverted'/>
  <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0,0,0,0.6)',
    }}>

      <RUUICARD onCancelPress={()=>{setShowRuuiCard(false)}}/> 
    </View>
  </Modal>
 
        
        <View className='justify-center' style={{height: hp('12%')}}>
           <Header headerTitle='Chats'/>
        </View>
    
         
           <View className='flex-1 justify-evenly'>
    
           <TouchableOpacity
              style={{  shadowColor: 'gray',
              shadowOpacity: 0.2,
              shadowOffset: { width: 2, height: 5 },
              elevation: 5,borderColor:Colors.lightorange,borderWidth:2,
              backgroundColor:Colors.white
           
           }}
           className=' py-5 px-5 flex-row '
          
           >
               
           <Image
           source={require('./../../../../assets/ruuai.png')}
           resizeMode='contain'
         
           />
           <View className='px-3 justify-center'   >
        <View className='flex-row'>
    
             <Text style={{fontFamily:'PoppinsBold'}} className='text-xl mr-2 justify-between'>RUU</Text>
             <Text  style={{fontFamily:'PoppinsBold',color:Colors.orange}} className='text-xl justify-between'>AI</Text>
           </View>
    
           
         
           <Text style={{fontFamily:'PoppinsMedium',textTransform:'uppercase'}} className='text-sm'>Online</Text>
    
           
    
           </View>
         </TouchableOpacity>
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
       </View>
    </SafeAreaView>
  );
};

export default InboxScreenRunAI;
