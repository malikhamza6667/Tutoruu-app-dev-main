import React, { useState, useContext } from "react"
import { View, Image, Text, TextInput, StyleSheet,Alert, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Languages from '../languages'
import LanguageContext from '../languages/languageContext'
import Colors from "../../assets/Colors";
import Field from "./InputField";
import UserImage from "./userImage";
import Btn from "./Button"
import Spacer from "./Spacer"
import Auc from "./Auc"
import Button from "./Buttonnn";


interface Props{
    onPress: ()=>void

}
const RUUICARD: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
            <Image source={require('./../../assets/ruuicardpic.png')}
            resizeMode='contain'
            
            />

            </View>
<View className="flex-row">
    <Text style={{fontFamily: 'PoppinsBold',textTransform:'uppercase',color:Colors.orange}} className='text-xl'>One Month Free </Text>
    <Text style={{fontFamily: 'PoppinsBold',textTransform:'uppercase'}} className='text-xl'>of Ruu AI</Text>
</View>
<View>
    <Text style={{fontFamily: 'PoppinsRegular',textAlign:'center'}} >You’ve unlocked unlimited conversations with Ruu AI for one month. </Text>
</View>
<Button
title="START FREE TRAIL"
width={wp('60%')}

onPress={()=>{alert('pressed')}}
color={Colors.orange}
titleColor={Colors.white}
/>
<Text className="self-center" style={{fontFamily: 'PoppinsRegular',textAlign:'center'}}>No credit card required</Text>

          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
      
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
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