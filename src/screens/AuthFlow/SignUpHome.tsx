import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AuthHeader from '../../components/AuthHeader'


interface Props {
    navigation: any
}

const SignUpHome: React.FC<Props> = ({ navigation }) => {
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
  
        <SafeAreaView style={{flex:1,backgroundColor:Colors.orange,justifyContent:'space-around'}}>
  <StatusBar style='light' />
<View
        style={{ flex:1 }}
        className='justify-center'>
              
                
              <AuthHeader/>
                <View 
               style={{height:hp('90%')}}
                className='justify-center ' >

                    <Text
                    style={{fontFamily:'PoppinsSemiBold'}}
                    className='text-white text-xl self-center'>
                        {Strings.ST72}
                    </Text>
                    <View
                    style={{backgroundColor:Colors.white}}
                    className='m-3 px-2 py-6 justify-center rounded-[20px]'>
                        <Button
                      height={hp('6%')}
                      elevation={3}
                            color={Colors.white}
                            titleColor={Colors.black}
                            title='Sign Up With Google'
                            //image='data:image/png;base64,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'
                            image='googlelogo'
                            onPress={() => { alert('pressed') }}
                        />

                        <Button
                         height={hp('6%')}
                            color={Colors.blue}
                            title='Sign Up With Facebook'
                          //  image='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
                         image='facebooklogo'  
                          onPress={() => { alert('pressed') }}
                        />
                        <Button
                            color={Colors.orange}
image='arrowright'
height={hp('6%')}
                            title='Sign Up With University Email'
                            //image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            onPress={() => { navigation.navigate(RouteNames.SignUpForm) }}
                        />

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text 
                         style={{fontFamily:'PoppinsRegular'}}
                        className='text-white text-sm  self-center'>
                            {Strings.ST73}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.LoginScreen) }}
                        >
                            <Text
                            style={{fontFamily:'PoppinsSemiBold'}}
                            className='text-white text-sm border-b-2 border-white  self-center'>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
</SafeAreaView>
        

    
    )
}
export default SignUpHome;