import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationStack from "../AuthenticationFlow/AuthenticationStack";
import UserMainFlow from "../UserMainStack/UserMainFlow";
import TutorMainFLow from "../TutorMainStack/TutorMainFlow";

const stack=createNativeStackNavigator()

const MainAppRoutes=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}} >
            <stack.Screen name="AuthenticationStack" component={AuthenticationStack} />
            <stack.Screen name="UserMainFlow" component={UserMainFlow} />
            <stack.Screen name="TutorMainFLow" component={TutorMainFLow} />
        </stack.Navigator>
    )
}

export default MainAppRoutes