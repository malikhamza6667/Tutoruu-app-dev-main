import React, { useState,useEffect } from 'react';
import { GiftedChat, IMessage, InputToolbar,Bubble,Send, Avatar, Composer } from 'react-native-gifted-chat';
import { View,Text,Image,TextInput, TouchableOpacity, StyleSheet,ScrollView, SafeAreaView, Modal,KeyboardAvoidingView  } from 'react-native';
import Header from '../../../components/Header';
import Colors from '../../../../assets/Colors';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RUUICARD from '../../../components/RuuiCard';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageBox from '../../../components/MessageBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ImageAdress } from '../DummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';



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
    <SafeAreaView className='flex-1 bg-white justify-center'> 
  <View className='justify-center' style={{height: hp('10%')}}>
           <Header headerTitle='Chat'/>
        </View>
        <ScrollView>

<View className=' bg-white justify-evenly' style={{height: hp('90%')}}>
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
 
        
    <View style={{height: hp('15%')}} >

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
    </View>
      
    
         
          
<View style={{height: hp('75%')}}>

  <KeyboardAvoidingView style={{flex:1}} contentContainerStyle={{flexGrow:1,}} behavior='height'>
<View style={{height: hp('60%')}} >
    <ScrollView collapsable={true}>
         <MessageBox radiusLeft={2} color='rgba(254, 131, 3, 0.6)' message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
         <MessageBox radiusRight={2} directionRight={true}  message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
         <MessageBox radiusLeft={2} color='rgba(254, 131, 3, 0.6)' message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
         <MessageBox radiusRight={2} directionRight={true}  message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
         <MessageBox radiusLeft={2} color='rgba(254, 131, 3, 0.6)' message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
         <MessageBox radiusRight={2} directionRight={true}  message='Hello this is Ruu, I’m here to help you with
your academics in university. Ask me 
anything!' image={ImageAdress}/>
</ScrollView>
</View>

        <View style={{height: hp('15%')}} className='justify-center'>
           <View
           
           className=' flex-row justify-between items-center gap-x-4  m-4 my-1  p-1 rounded-full border border-gray-300'>

<TextInput
    style={{ fontFamily: 'PoppinsMedium' }}
    className=' flex-1'
    placeholder='Enter A Message'
    placeholderTextColor={Colors.gray}
   
/>
<TouchableOpacity
    style={{backgroundColor: Colors.orange}}
    className="rounded-full p-2"
>

<AntDesign name="arrowright" size={24} color={Colors.white} />
</TouchableOpacity>
</View>
          </View>   

    
           </KeyboardAvoidingView>
</View>
      
         
       </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default InboxScreenRunAI;



//this is gifted chat code
   {/* <GiftedChat
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
         /> */}