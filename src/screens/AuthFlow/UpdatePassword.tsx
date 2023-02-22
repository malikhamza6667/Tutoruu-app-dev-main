import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'


interface Props {
    navigation: any
}

const UpdatePassword: React.FC<Props> = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
    

            <View className='flex-1 justify-between'
            style={{backgroundColor:Colors.orange}}
            >
                <SafeAreaView/>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/authlogo.png')}
                        resizeMode='contain'
                        className='h-40 w-40'
                    />
                </View>
                <View style={{flex:0.9,paddingVertical:10}}>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text className='text-white text-2xl text-center font-bold self-center'>
                            {Strings.ST76}
                        </Text>
                        <Text className='text-white text-lg text-center  self-center'>
                            {Strings.ST77}
                        </Text>
                    </View>

                    <View className='bg-white m-4 p-5 py-6 justify-center rounded-xl'>

                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter Your Password'
                            onChangeText={(text) => { setPassword(text) }}
                            secureTextEntry
                        />
                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Password'
                            onChangeText={(text) => { setConfirmPassword(text) }}
                            secureTextEntry
                        />
                        <Button
                        image='arrowright'
                            color={Colors.orange}
                            title='Update Password'
                            onPress={() => { alert(password) }}
                        />


                    </View>

                </View>

            </View>
    
    )
}
export default UpdatePassword;