import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationStack from "../AuthenticationFlow/AuthenticationStack";
import UserMainFlow from "../UserMainStack/UserMainFlow";

const stack=createNativeStackNavigator()

const MainAppRoutes=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}} >
            <stack.Screen name="UserMainFlow" component={UserMainFlow} />
            <stack.Screen name="AuthenticationStack" component={AuthenticationStack} />
        </stack.Navigator>
    )
}

export default MainAppRoutes