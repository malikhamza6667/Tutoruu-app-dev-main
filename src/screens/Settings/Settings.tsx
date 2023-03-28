import React from "react";
import { View, Text } from "react-native";
import ActionLink from "../../components/ActionLink/ActionLink";
import Spacer from "../../components/Spacer/Spacer";
import Details from "../../layouts/Details/Details";

const Settings = () => {
    return (
        <Details headerTitle="Settings">
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