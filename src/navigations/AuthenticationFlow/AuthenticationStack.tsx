import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/Auth/Login/Login";
import Signup from "../../screens/Auth/Signup/Signup";
import ResetPassword from "../../screens/Auth/ResetPassword/ResetPassword";
import MagicLink from "../../screens/Auth/MagicLink/MagicLink";
import UpdatePassword from "../../screens/Auth/UpdatePassword/UpdatePassword";
import CompleteRegistration from "../../screens/Auth/CompleteRegistration/CompleteRegistration";
import SignUpMethods from "../../screens/Auth/SignUpMethods/SignUpMethods";



const stack= createNativeStackNavigator()


const AuthenticationStack=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen component={Login} name="Login"/>
            <stack.Screen component={SignUpMethods} name="SignUpMethods"/>
            <stack.Screen component={Signup} name="Signup"/>
            <stack.Screen component={CompleteRegistration} name="CompleteRegistration"/>
            <stack.Screen component={ResetPassword} name="ResetPassword"/>
            <stack.Screen component={MagicLink} name="MagicLink"/>
            <stack.Screen component={UpdatePassword} name="UpdatePassword"/>
        </stack.Navigator>
    )
}

export default AuthenticationStack