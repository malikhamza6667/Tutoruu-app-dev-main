import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import { Picker } from '@react-native-picker/picker'
interface Props {
    navigation: any
    route: any
}

const CompleteRegisteration: React.FC<Props> = ({ navigation, route }) => {
    const { selectedUniversity, userName, phoneNo } = route.params;

    const [selectedUni, setSelectedUni] = useState(selectedUniversity)
    const [UserName, setUserName] = useState(userName)
    const [PhoneNo, setPhoneNo] = useState(phoneNo)
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (
       

            <View 
            style={{backgroundColor:Colors.orange}}
            className='flex-1 justify-between'>
                <SafeAreaView/>
                <StatusBar style='light' />
                <View className='  h-10 justify-center m-3' >
                    <Image
                        source={require('../../../assets/authlogo.png')}
                        resizeMode='contain'
                        className='h-40 w-40 self-center'
                    />
                </View>
                <View style={{flex:0.8}}>

                    <Text className='text-white text-2xl text-center p-2 m-2 font-bold self-center'>
                        {Strings.ST82}
                    </Text>
                    <View className='bg-white m-5 p-5 justify-center rounded-xl'>
                    <View className='flex-row justify-evenly'>
<View  style={{flex:1}}>

                            <Input
                                value={userName}
                                title='User Name'
                                placeholder='Enter A UserName'
                                onChangeText={(text) => { setUserName(text) }}
                            />
</View>
                            <View 
                            style={{justifyContent:'center'}}
                            className=" flex-1 m-1 p-1">
                                <Text
                                    className="text-center mx-3 font-bold  text-sm text-black self-start"
                                >University</Text>
                                <View
                               
                                    className=" border border-gray-300 h-11 rounded-3xl"
                                  style={{justifyContent:'center',marginVertical:5,marginHorizontal:10}}
                                >
                                    <Picker
                            placeholder='Select Your Uni'
                           style={{color: 'black'}}
                           
                                        selectedValue={selectedUni}
                                        onValueChange={(itemValue, itemIndex) =>
                                           {
                                            setSelectedUni(itemValue)}
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View
                                >
                            </View>

                        </View>
                        <Input
                            value={PhoneNo}
                            title='Phone'
                            placeholder=' Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />
                        <Button
                         image='arrowright'
                            color={Colors.orange}
                            title='Create Account'
                            onPress={() => { navigation.navigate(RouteNames.MagicLink) }}
                        />

                    </View>

                </View>

            </View>
       
    )
}
export default CompleteRegisteration;
