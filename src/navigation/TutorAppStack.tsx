import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import TutorRegister from "../screens/TutorFlow/RegisterTeacher";


const Stack= createNativeStackNavigator()


const TutorAppStack:React.FC=()=>{
    return(
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen component={TutorRegister} name='TutorRegister'/>
</Stack.Navigator>
    )
}
export default TutorAppStack