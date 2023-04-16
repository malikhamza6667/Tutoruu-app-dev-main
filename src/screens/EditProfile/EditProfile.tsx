import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';


import Details from "../../layouts/Details/Details";
import Avatar from "../../components/Avatar/Avatar";
import Colors from "../../../assets/Colors";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Card } from "../../layouts/Card/Card";
import { Separator } from "../../components/Separator/Separator";


const EditProfile = () => {
    const [bio, setBio] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [ClassOf, setClassOf] = useState('')
    const [newClass, setNewClass] = useState('')
    const [major, setMajor] = useState('')
    const [gpa, setGpa] = useState('')


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
        <Details headerTitle="Edit Profile">
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
                        <View style={{ height: hp('60') }}>
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
                        </View>
                        <View className="px-4 py-2">
                            <Button
                                shape="full"
                                onPress={() => { }}
                                text='Save'
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Details>
    )
}

export default EditProfile