import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ApplicationConfirmationStatus from "../screens/TutorFlow/TutorApplicationFlow/AcceptedApplication";
import ApplicationStatus from "../screens/TutorFlow/TutorApplicationFlow/ApplicationStatus";


import TutorRegister from "../screens/TutorFlow/TutorApplicationFlow/RegisterTeacher";
import TutorApplicationConfirmation from "../screens/TutorFlow/TutorApplicationFlow/TutorConfirmApplication";


const Stack= createNativeStackNavigator()


const TutorAppStack:React.FC=()=>{
    return(
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen component={TutorRegister} name='TutorRegister'/>
    <Stack.Screen component={TutorApplicationConfirmation} name='TutorApplicationConfirmation'/>
    <Stack.Screen component={ApplicationStatus} name='ApplicationStatus'/>
    <Stack.Screen component={ApplicationConfirmationStatus} name='ApplicationConfirmationStatus'/>
</Stack.Navigator>
    )
}
export default TutorAppStack