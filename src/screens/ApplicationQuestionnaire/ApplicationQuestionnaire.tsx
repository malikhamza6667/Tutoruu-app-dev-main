import React, { useState } from "react";

import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Avatar from "../../components/Avatar/Avatar";
import Details from "../../layouts/Details/Details";
import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Separator } from "../../components/Separator/Separator";
import Input from "../../components/Input/Input";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { Card } from "../../layouts/Card/Card";
import Button from "../../components/Button/Button";
import Switch from "../../components/Switch/Switch";
type Props = {
    navigation?: any
    route?: any
}

const ClassesData = [
    'CSCE-1521',
    'RHET-32'
]
const ApplicationQuestionnare: React.FC<Props> = ({
    navigation,
    route
}) => {
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
        <SafeAreaView className="flex-1">
            <Details headerTitle="Tutor Application">
                <View className="px-4 flex-row">
                    <View>
                        {
                            pickedImage ?
                                <Avatar
                                    image={pickedImage}
                                    showCap
                                    size="large"
                                />
                                :
                                <Avatar
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7fWIFm7j2Oz0gFHTNp1fskSWJDbi_EUD2Q&usqp=CAU"
                                    showCap
                                    size="large"
                                />
                        }
                        <TouchableOpacity
                            style={tw`my-5 self-center`}
                            onPress={() => { pickImage() }}
                        >

                            <Text style={[{ fontFamily: 'PoppinsBold', color: Colors.orange }]}>Update</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-2`}>
                        <Text style={[tw`text-xl`, { fontFamily: 'PoppinsBold' }]}>Ragnar</Text>
                        <Text style={[tw`text-sm`, { fontFamily: 'PoppinsRegular' }]}>ragnarlothbrok@gmail.com</Text>
                    </View>

                </View>
                <Separator type="line" />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>

                        <View className="p-1 pt-4 justify-evenly" >
                            <View className="self-center">

                                <Input
                                    value={bio}
                                    title={'Bio'}
                                    placeholder={'Doe....'}
                                    multiline
                                    onChangeText={(text) => { setBio(text) }}
                                    size='Xlarge'
                                />
                            </View>
                            <View style={tw`flex-row justify-around py-3 px-2`}>
                                <Input
                                    value={PhoneNo}
                                    title={'Phone No'}
                                    placeholder={'Doe....'}
                                    onChangeText={(text) => { setPhoneNo(text) }}
                                    size='medium'
                                />
                                <Input
                                    value={ClassOf}
                                    title={'Class Of'}
                                    placeholder={'Doe....'}
                                    onChangeText={(text) => { setClassOf(text) }}
                                    size='small'
                                />
                            </View>
                            <View className="self-center">
                                <Input
                                    value={newClass}
                                    title={'Classes'}
                                    placeholder={'Add Classes...'}
                                    icon={'Entypo plus 24 gray'}
                                    onIconPressed={() => {
                                        ClassesData.push(newClass)

                                    }}
                                    onChangeText={(text) => { setNewClass(text) }}
                                    size='xlarge'
                                />
                                <View className="mt-1" style={{ height: hp('7%') }}>

                                    <HorizontalList

                                        data={ClassesData.slice(0, 4)}
                                        renderItem={({ item }) => {
                                            return (
                                                <View

                                                    style={{ backgroundColor: Colors.gray }}
                                                    className=' rounded-full self-center py-2 px-2 bg-green-400 m-0.5  items-center '>
                                                    <Text

                                                        style={{ color: Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                                                        className='text-sm '>{item}</Text>
                                                </View>
                                            )
                                        }}
                                        keyExtractor={(item, index) => { return index.toString() }}
                                    />
                                </View>
                            </View>
                            <View style={tw`flex-row justify-around py-3 px-2`}>
                                <Input
                                    value={major}
                                    title={'Major'}
                                    placeholder={'Doe....'}
                                    onChangeText={(text) => { setMajor(text) }}
                                    size='medium'
                                />
                                <Input
                                    value={gpa}
                                    title={'GPA'}
                                    placeholder={'Doe....'}
                                    onChangeText={(text) => { setGpa(text) }}
                                    size='small'
                                />
                            </View>

                            <View className=" py-3">
                                <Text style={[tw`px-6 text-base py-3`, { fontFamily: 'PoppinsMedium' }]}>Tutoring Information</Text>
                                <Separator type="line" />
                                <Card >
                                    <View style={tw`flex-row justify-between px-4`}>
                                        <View className='py-3 ' style={{ width: wp('60%') }}>
                                            <Text style={{ fontFamily: 'PoppinsMedium' }} >Transcript</Text>
                                            <Text style={{ fontFamily: 'PoppinsRegular' }}>{pickedDocName}</Text>
                                        </View>
                                        <Button
                                            shape="round"
                                            onPress={() => { PickDocument() }}
                                            icon='Entypo attachment 24 white'
                                        />
                                    </View>
                                </Card>
                            </View>

                            <View style={tw`flex-row px-5 py-2 justify-between items-center`}>
                                <View>
                                    <Input
                                        value={hourlyRate}
                                        title={'Hourly Rate'}
                                        placeholder={'100'}
                                        onChangeText={(text) => { setHourlyRate(text) }}
                                        size='medium'
                                    />
                                    <Text style={[tw`text-xs px-4 py-1`, { fontFamily: 'PoppinsMedium', color: Colors.orange, textTransform: 'uppercase' }]}>You will get: 92.5</Text>

                                </View>
                                <View className=" flex-row items-center mr-4 mt-4 pt-1 ">
                                    <Switch
                                        opened

                                        onToggle={() => { alert('Toggled') }}
                                    />

                                </View>
                            </View>

                            <View className="self-center py-2">

                                <Input
                                    value={longQuestionOne}
                                    title={'Long-Form Question 1'}
                                    placeholder={'Doe....'}
                                    multiline
                                    onChangeText={(text) => { setLongQuestionOne(text) }}
                                    size='Xlarge'
                                />
                            </View>
                            <View className="self-center  py-2">

                                <Input
                                    value={longQuestionTwo}
                                    title={'Long-Form Question 2'}
                                    placeholder={'Doe....'}
                                    multiline
                                    onChangeText={(text) => { setLongQuestionTwo(text) }}
                                    size='Xlarge'
                                />
                            </View>
                            <View className="self-center  py-2">

                                <Input
                                    value={longQuestionThree}
                                    title={'Long-Form Question 3'}
                                    placeholder={'Doe....'}
                                    multiline
                                    onChangeText={(text) => { setLongQuestionThree(text) }}
                                    size='Xlarge'
                                />
                            </View>
                            <View className="px-4 py-2">

                                <Button
                                    shape="full"
                                    onPress={() => navigation.navigate('ApplicationStatus')}
                                    text='Save'
                                />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Details>
        </SafeAreaView>
    )
}

export default ApplicationQuestionnare