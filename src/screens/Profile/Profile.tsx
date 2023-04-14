import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Details from "../../layouts/Details/Details";
import Avatar from "../../components/Avatar/Avatar";
import Colors from "../../../assets/Colors";

const Profile = () => {
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
        <Details headerTitle="Profile">
            <View>
                <View
                    style={tw`flex-row`}
                >

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
                    </View>

                    <View style={tw`p-2`}>
                        <Text style={[tw`text-xl`, { fontFamily: 'PoppinsBold' }]}>Ragnar</Text>
                    </View>
                </View>

            </View>
        </Details>
    )
}

export default Profile