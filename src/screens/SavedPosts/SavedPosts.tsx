import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Details from "../../layouts/Details/Details";
import Avatar from "../../components/Avatar/Avatar";
import Colors from "../../../assets/Colors";

const SavedPosts = () => {
    
    
    return (
        <Details headerTitle="SavedPosts">
            <View>
                <View
                    style={tw`flex-row`}
                >

                   
            <Text>Saved Posts Screen</Text>
                </View>

            </View>
        </Details>
    )
}

export default SavedPosts