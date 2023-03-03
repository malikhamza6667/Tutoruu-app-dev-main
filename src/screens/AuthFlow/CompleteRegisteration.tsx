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
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import AuthHeader from '../../components/AuthHeader'
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
       <SafeAreaView className='flex-1 justify-center'>
          <StatusBar style='light' />
            <View 
            style={{backgroundColor:Colors.orange}}
            className='flex-1 justify-between'>
              
              
              <AuthHeader/>
                <View style={{height: hp('80%')}} className='justify-center pb-20'>

                    <Text
                    style={{fontFamily: 'PoppinsBold'}}
                    className='text-white text-xl text-center px-4 m-1 self-center'>
                        {Strings.ST82}
                    </Text>
                    <View className='bg-white items-center m-3 p-5 justify-center rounded-[20px]'>
                    <View className='flex-row justify-between'>


<View>

                            <Input
                                value={userName}
                                title='User Name'
                                width={wp('45%')}
                                placeholder='Enter A UserName'
                                onChangeText={(text) => { setUserName(text) }}
                            />
</View>



                            <View 
                          className=' justify-center items-end gap-y-1.5 pb-1'
                            style={{width: wp('40%')}}>
                                <Text
                                 style={{fontFamily:'PoppinsMedium'}}
                                    className="text-center   text-sm  self-center"
                                >University</Text>
                                <View
                                style={{width: wp('32%'),justifyContent:'center',height: hp('5%')}}
                                    className=" border border-gray-300 h-11 w-fit rounded-3xl"
                                 
                                >
                                    <Picker
                            placeholder='Select Your Uni'
                           
                           
                                        selectedValue={selectedUni}
                                        onValueChange={(itemValue, itemIndex) =>
                                           {
                                            setSelectedUni(itemValue)}
                                        }>
                                        <Picker.Item label="Doe.." value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View
                                >
                            </View>

                        </View>
                        <View>
                        <Input
                            value={PhoneNo}
                            title='Phone'
                            placeholder=' Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />

                        </View>
                        <Button
                         image='arrowright'
                            color={Colors.orange}
                            title='Create Account'
                            height={hp('5%')}
                            width={wp('85%')}
                            onPress={() => { navigation.navigate(RouteNames.MagicLink) }}
                        />

                    </View>

                </View>

            </View>
       </SafeAreaView>

       
    )
}
export default CompleteRegisteration;
