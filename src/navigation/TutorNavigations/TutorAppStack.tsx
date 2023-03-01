import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InboxScreen from "../../screens/StudentFlow/Chat/Inbox";
import StudentProfileScreen from "../../screens/TutorFlow/StudentProfileView/StudentProfile";
import TutorSessions from "../../screens/TutorFlow/TutorSessions.tsx/TutorSessions";

import TutorApplicationFlowStack from "../StudentNavigations/TeacherApplicationFlow";
import TutorRoot from "./TutorDrawer";

const Stack= createNativeStackNavigator()


const TutorAppStack:React.FC=()=>{
    return(
<Stack.Navigator initialRouteName="TutorRoot" screenOptions={{headerShown:false}}>
    <Stack.Screen component={TutorRoot} name='TutorRoot' />
    <Stack.Screen component={TutorApplicationFlowStack} name='TutorApplicationFlowStack'/>
    <Stack.Screen component={InboxScreen} name='InboxScreen'/>
    <Stack.Screen component={TutorSessions} name='TutorSessions'/>
    <Stack.Screen component={StudentProfileScreen} name='StudentProfileScreen'/>
   
</Stack.Navigator>
    )
}
export default TutorAppStack