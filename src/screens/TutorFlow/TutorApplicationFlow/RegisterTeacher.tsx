import React, { useState } from 'react'
import { View,Text, Image, TouchableOpacity, 
    ScrollView, FlatList, TextInput,
     Platform, KeyboardAvoidingView, SafeAreaView,
    ImageBackground
    } from 'react-native'

import Colors from '../../../../assets/Colors'
import Divider from '../../../components/Divider'
import Header from '../../../components/Header'
import Spacer from '../../../components/Spacer'
import Input from '../../../components/TextInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { Classes } from '../../StudentFlow/DummyData'
import Button from '../../../components/Buttonnn'
import Card from '../../../components/Card'
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Entypo } from '@expo/vector-icons';

interface Props {
    navigation: any
}

const TutorRegister: React.FC<Props> = ({ navigation }) => {
    const [bio, setBio] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [ClassOf, setClassOf] = useState('')
    const [newClass, setNewClass] = useState('')
    const [major, setMajor] = useState('')
    const [gpa, setGpa] = useState('')
    const [hourlyRate, setHourlyRate] = useState('')

    const [longQuestionOne, setLongQuestionOne] = useState('')
    const [longQuestionTwo, setLongQuestionTwo] = useState('')
    const [longQuestionThree, setLongQuestionThree] = useState('')

    const [isOn, setIsOn] = useState(true)
    const [pickedImage, setPickedImage] = useState('')
    const [pickedDocUri, setPickedDocUri] = useState('')
    const [pickedDocName, setPickedDocName] = useState('Upload Your Transcript')


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });



        if (result.canceled) {
            setPickedImage('')
        }
        else {
            setPickedImage(result.assets[0].uri);

        }
    };

    const PickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: false
        });
        if (result.type == 'success') {
            console.log(result)
            setPickedDocName(result.name)
            setPickedDocUri(result.uri)
        }
        else {
            setPickedDocName('Pick A Document')
            setPickedDocUri('')
        }

    }


    return (
        <SafeAreaView className='flex-1 bg-white justify-center'>
<View className='justify-center' style={{height: hp('8%')}}>


<Header headerTitle='Tutor Application' />

</View>
            <View style={{height:hp('90%')}} className=' justify-evenly'>



              
              

                
                        <View className='flex-row px-1   items-center' style={{borderColor:Colors.gray,borderBottomWidth:2}}>
                            <View className='items-center '
                            style={{width:wp('25%'),height:hp('15%')
                            
                        
                        }} 
                            >
                                

                               
                             <ImageBackground
                             resizeMode='contain'
                             style={{  width: wp('24%'),
                                height: hp('12%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }}
                             className='rounded-full'
                             source={require('./../../../../assets/dpframe.png')}
                             >
                            
                      
<View style={{  zIndex:-1}}>

{pickedImage ? <Image
   source={{ uri: pickedImage }}
   
      resizeMode='contain'
      style={{
      
      
      top:hp('0.34%'),
      left:wp('0.6%'),
        width: wp('17.5%'),
        height: hp('8.5%'),
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }}
      className='rounded-full'
      
     
  /> :
      <Image
          source={require('./../../../../assets/dp.jpg')}
         
          resizeMode='contain'
          style={{
      
      
            top:hp('0.34%'),
            left:wp('0.6%'),
              width: wp('17.5%'),
              height: hp('8.5%'),
              backgroundColor: 'rgba(0, 0, 0, 0)'
          }}
          className='rounded-full'
      />
  }
</View>

                            

                             </ImageBackground>

                     
                                

                              
                                <TouchableOpacity
                                    onPress={() => { pickImage() }}
                                >
                                    <Text style={{ fontFamily: 'PoppinsBold', color: Colors.orange }} className='text-sm'>Update</Text>
                                </TouchableOpacity>
                            </View>
                            <View className='justify-start py-2 ' style={{height:hp('10%')}}>
                                <Text style={{ fontFamily: 'PoppinsBold' }} className='text-xl'>Ragnar</Text>
                                <Text style={{ fontFamily: 'PoppinsRegular' }} className='text-sm'>ragnarlothbrok@gmail.com</Text>
                            </View>

                        </View>
                        
                 

                    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>



                        <ScrollView contentContainerStyle={{  paddingBottom: 10 }}>

                            <View className=' px-3 py-3 justify-evenly'>
                                
                                <View className='px-2'>
                                    <Input
                                        value={bio}
                                        onChangeText={(text) => { setBio(text) }}
                                        title='Bio'
                                        multiline
                                        height={hp('15%')}
                                        width={wp('90%')}
                                    />

                                </View>


                                <View className='flex-row  items-center justify-between  px-2 '>
                                    <View>

                                        <Input
                                            width={wp('45%')}
                                            value={PhoneNo}
                                            onChangeText={(text) => { setPhoneNo(text) }}
                                            title='Phone No'

                                        />
                                    </View>
                                    <View >
                                        <Input
                                            width={wp('30%')}
                                            value={ClassOf}
                                            onChangeText={(text) => { setClassOf(text) }}
                                            title='Class Of'

                                        />

                                    </View>
                                </View>
                                <View >
                                    <Text style={{fontFamily:'PoppinsMedium'}} className='mx-6'>Classes</Text>

                                    <View className='flex-row justify-between self-center items-center gap-x-4  m-1 my-1  p-2 rounded-full border border-gray-300'>

                                        <TextInput
                                            style={{ fontFamily: 'PoppinsMedium' }}
                                            className=' flex-1'
                                            placeholder='Add Classes'
                                            placeholderTextColor={Colors.gray}
                                            value={newClass}
                                            onChangeText={(text) => { setNewClass(text) }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => {
                                                Classes.push({
                                                    id: Math.random(),
                                                    name: newClass
                                                })
                                                setNewClass('')
                                            }}
                                        >

                                            <FontAwesome name="plus" size={hp('2.5')} color={Colors.gray}
                                                style={{
                                                    marginRight: wp('2')
                                                }}
                                            />
                                        </TouchableOpacity>



                                    </View>
                                    <View
                                        className='m-1 '
                                    >
                                        <FlatList
                                            data={Classes}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <TouchableOpacity

                                                        style={{ backgroundColor: Colors.gray, marginVertical: hp('1') }}
                                                        className=' rounded-full py-2 px-3 mx-1 items-center   '>
                                                        <Text
                                                            style={{
                                                                fontFamily: 'PoppinsMedium',
                                                                color: Colors.black,
                                                                fontWeight: '500',
                                                                fontSize: hp('1.3')
                                                            }}
                                                        // className='text-sm'
                                                        >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                            keyExtractor={(item: { id: { toString: () => any } }) => { return item.id.toString() }}
                                        />

                                    </View>
                                </View>

                                <View className='flex-row   justify-between   '>
                                    <View

                                        className=' m-1'

                                    >

                                        <Input
                                            width={wp('45%')}
                                            value={major}
                                            onChangeText={(text) => { setMajor(text) }}
                                            title='Major'

                                        />
                                    </View>
                                    <View className=' m-1  '>
                                        <Input
                                            value={gpa}
                                            onChangeText={(text) => { setGpa(text) }}
                                            title='GPA'
                                            width={wp('30%')}
                                        />

                                    </View>
                                </View>
                                <View className=' justify-evenly'>
                                    <Text style={{ fontFamily: 'PoppinsMedium' }} className='text-base px-3 py-2'>Tutoring Information</Text>
                                    <View  className='border border-gray-200'>

                                    </View>
                                   
                                    <View className='flex-row rounded-2xl  justify-evenly my-5 mx-2 px-2 py-4'
                                        style={{
                                            backgroundColor: Colors.white,
                                         

                                            shadowColor: 'gray',
                                            shadowOpacity: 0.4,
                                            shadowOffset: { width: 0, height: 2 },
                                            shadowRadius: 5,
                                            elevation: 6,
                                        }}

                                    >

                                        <View className='gap-y-2' style={{ width: wp('60%') }}>
                                            <Text style={{ fontFamily: 'PoppinsMedium' }} >Transcript</Text>
                                            <Text>{pickedDocName}</Text>
                                        </View>
                                        <View
                                            style={{ backgroundColor: Colors.lightorange, width: wp('15%'), height: hp('7%') }}
                                            className='rounded-full justify-center items-center'>

                                            <TouchableOpacity
                                                onPress={() => { PickDocument() }}
                                                style={{ backgroundColor: Colors.lightorange, width: wp('15%'), height: hp('7%') }}
                                                className='rounded-full justify-center items-center'>
                                                <Entypo name="attachment" size={24} color={Colors.orange} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <View className='flex-row px-3 justify-between'>
                                        <View>

                                            <Input
                                                title='Hourly Rate'
                                                width={wp('45%')}
                                                onChangeText={(text) => { setHourlyRate(text) }}
                                                value={hourlyRate}
                                            />
                                        </View>
                                        <View className='p-1 px-2 '>
                                            <Text>{isOn ? 'In Person' : 'Online'}</Text>
                                            <TouchableOpacity
                                                onPress={() => setIsOn(!isOn)}
                                            >
                                                {!isOn ?
                                                    (<FontAwesome name="toggle-off" size={hp('6%')} color={Colors.orange} />)
                                                    :
                                                    (<FontAwesome name="toggle-on" size={hp('6%')} color={Colors.orange} />)
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>



                                <View className='px-2'>
                                    <Input
                                        value={longQuestionOne}
                                        onChangeText={(text) => { setLongQuestionOne(text) }}
                                        title='Long-Form  Question 1 '
                                        multiline
                                        height={hp('15%')}
                                        width={wp('90%')}
                                    />

                                </View>
                                <View className='px-2'>
                                    <Input
                                    width={wp('90%')}
                                        value={longQuestionTwo}
                                        onChangeText={(text) => { setLongQuestionTwo(text) }}
                                        title='Long-Form  Question 2 '
                                        multiline
                                        height={hp('15%')}
                                    />

                                </View>
                                <View className='px-2'>
                                    <Input
                                        value={longQuestionThree}
                                        onChangeText={(text) => { setLongQuestionThree(text) }}
                                        title='Long-Form  Question-3 '
                                        multiline
                                        height={hp('15%')}
                                        width={wp('90%')}
                                    />

                                </View>





                                <View>
                                    <Button
                                        color={Colors.orange}
                                        title='Save'
                                        onPress={() => {
                                            navigation.navigate('TutorApplicationConfirmation', {
                                                userName: 'Ragnar'
                                            })
                                        }}
                                    />
                                </View>
                            </View>
                        </ScrollView>

                    </KeyboardAvoidingView>
                </View>






        
        </SafeAreaView>
    )
}
export default TutorRegister;