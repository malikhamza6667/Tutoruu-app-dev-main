import React, { useState, useContext } from "react"
import { View, Image, Text, TextInput, StyleSheet,Alert, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Languages from '../languages'
import LanguageContext from '../languages/languageContext'
import Colors from "../../assets/Colors";
import Field from "./InputField";
import UserImage from "./userImage";
import Btn from "./Button"
import Spacer from "./Spacer"
import Auc from "./Auc"
import Button from "./Buttonnn";

import { Entypo } from '@expo/vector-icons';

interface Props{
    onCancelPress: ()=>void

}
const RUUICARD: React.FC<Props> = ({onCancelPress}) => {
   
    return (
        
      
     
     
          <View style={styles.modalView}
          className='m-3.5 py-5 items-center px-6 rounded-3xl  bg-white'
          >
          <TouchableOpacity 
          className="self-end m-1 justify-end items-end "
          onPress={onCancelPress}>
      <Entypo name="circle-with-cross" size={30} color={Colors.gray} />
      </TouchableOpacity>

<View   className=' py-6 px-6 items-center  '>

            <View className="flex-row">
            <Image source={require('./../../assets/ruuicardcap.png')}
            resizeMode='contain'
            
            /> 
            <Image source={require('./../../assets/ruuicardpic.png')}
            resizeMode='contain'
            style={{marginLeft:-60}}
            />
           

            </View>
<View className="flex-row">
    <Text style={{fontFamily: 'PoppinsBold',textTransform:'capitalize',color:Colors.orange}} className='text-xl'>One Month Free </Text>
    <Text style={{fontFamily: 'PoppinsBold',textTransform:'capitalize'}} className='text-xl'>of Ruu AI</Text>
</View>
<View>
    <Text style={{fontFamily: 'PoppinsRegular',textAlign:'center'}} >You’ve unlocked unlimited conversations with Ruu AI for one month. </Text>
</View>
<Button
title="START FREE TRAIL"
width={wp('50%')}
height={hp('5%')}
textSize={14}

onPress={()=>{alert('pressed')}}
color={Colors.orange}
titleColor={Colors.white}
/>
<Text className="self-center" style={{fontFamily: 'PoppinsRegular',textAlign:'center'}}>No credit card required</Text>

          </View>
</View>

       
     
      
    )
}

const styles = StyleSheet.create({
   
    modalView: {
    
    
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default RUUICARD