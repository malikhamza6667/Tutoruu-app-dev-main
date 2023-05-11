import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ActionLink from "../../components/ActionLink/ActionLink";
import Spacer from "../../components/Spacer/Spacer";
import Details from "../../layouts/Details/Details";
type Props={
    navigation?:any
}
const Settings:React.FC<Props> = ({navigation}) => {
    return (
        <Details headerTitle="Settings">
            <TouchableOpacity
            onPress={()=>{navigation.navigate('UpdatePassword')}}
            >
                <Text>Update Password</Text>
            </TouchableOpacity>
            <ActionLink text='Update Password' icon={'Entypo lock '} link='' />
            <Spacer />
            <ActionLink text='Logout' icon={'AntDesign poweroff '} link='' />
            <Spacer />
            <Spacer />
            <ActionLink text='Help' icon={'AntDesign warning '} link='' />
        </Details>
    )
}


export default Settings