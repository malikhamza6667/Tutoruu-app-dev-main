import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../../screens/AuthFlow/LoginScreen';

import SignUpForm from '../../screens/AuthFlow/SignUpForm';
import SignUpHome from '../../screens/AuthFlow/SignUpHome';
import CompleteRegisteration from '../../screens/AuthFlow/CompleteRegisteration';
import UpdatePassword from '../../screens/AuthFlow/UpdatePassword';
import ForgetPassword from '../../screens/AuthFlow/ForgetPassword';
import MagicLink from '../../screens/AuthFlow/MagicLink';



import RouteNames from '../../screens/RouteNames';

const stack = createNativeStackNavigator()


const AuthStack: React.FC = () => {
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name={RouteNames.LoginScreen} component={LoginScreen} />
            <stack.Screen name={RouteNames.SignUpHome} component={SignUpHome} />
            <stack.Screen name={RouteNames.SignUpForm} component={SignUpForm} />
            <stack.Screen name={RouteNames.CompleteRegisteration} component={CompleteRegisteration} />
            <stack.Screen name={RouteNames.ForgetPassword} component={ForgetPassword} />
            <stack.Screen name={RouteNames.UpdatePassword} component={UpdatePassword} />
            <stack.Screen name={RouteNames.MagicLink} component={MagicLink} />
        </stack.Navigator>
    )
}

export default AuthStack;