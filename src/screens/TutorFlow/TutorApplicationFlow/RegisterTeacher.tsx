import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'

import Colors from '../../../../assets/Colors'
import Divider from '../../../components/Divider'
import Header from '../../../components/Header'
import Spacer from '../../../components/Spacer'
import Input from '../../../components/TextInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { Classes } from '../../StudentFlow/DummyData'
import Button from '../../../components/Buttonnn'

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

    return (
        <View className='flex-1 justify-evenly'>
            <SafeAreaView />


            <View className='top-5  mb-2'>

                <Header headerTitle='Tutor Application' />
            </View>
            <View className='flex-1 my-1 justify-center'>

                <View className='px-5 py-3 border-b-2 border-gray-300'
                    style={{
                        // backgroundColor:'pink'
                    }}
                >
                    <View className='flex-row gap-3 items-center'>
                        <View className='items-center justify-center gap-2 '>
                            <Image
                                source={require('./../../../../assets/dp.jpg')}
                                className='h-20 w-20 rounded-full'
                                resizeMode='contain'
                            />
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'PoppinsBold', color: Colors.orange }} className='text-sm'>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'PoppinsBold' }} className='text-xl'>Ragnar</Text>
                            <Text style={{ fontFamily: 'PoppinsRegular' }} className='text-sm'>ragnarlothbrok@gmail.com</Text>
                        </View>

                    </View>
                </View>



                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ padding: 5 }}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}



                    >

                        <View className='gap-3 px-5 py-5 justify-center '>
                            <View className=''>
                                <Input
                                    value={bio}
                                    onChangeText={(text) => { setBio(text) }}
                                    title='Bio'
                                    multiline
                                />

                            </View>
                            <View className='flex-row   justify-between   '>
                                <View
                                    style={{ width: wp('50%') }}
                                    className=' m-1'

                                >

                                    <Input

                                        value={PhoneNo}
                                        onChangeText={(text) => { setPhoneNo(text) }}
                                        title='Phone No'

                                    />
                                </View>
                                <View className=' m-1  '
                                    style={{ width: wp('30%') }}
                                >
                                    <Input
                                        value={ClassOf}
                                        onChangeText={(text) => { setClassOf(text) }}
                                        title='Class Of'

                                    />

                                </View>
                            </View>
                            <View >

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
                                    style={{ width: wp('50%') }}
                                >

                                    <Input

                                        value={major}
                                        onChangeText={(text) => { setMajor(text) }}
                                        title='Major'

                                    />
                                </View>
                                <View className=' m-1  '
                                    style={{ width: wp('30%') }}
                                >
                                    <Input
                                        value={gpa}
                                        onChangeText={(text) => { setGpa(text) }}
                                        title='GPA'

                                    />

                                </View>
                            </View>
                            <View className='px-2'>
                                <Text style={{ fontFamily: 'PoppinsMedium' }} className='text-base px-3'>Tutoring Information</Text>
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
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>






        </View>
    )
}
export default TutorRegister;