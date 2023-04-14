import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed/Feed';
import Login from '../../screens/Auth/Login/Login';
import Signup from '../../screens/Auth/Signup/Signup';
import ResetPassword from '../../screens/Auth/ResetPassword/ResetPassword';
import UpdatePassword from '../../screens/Auth/UpdatePassword/UpdatePassword';
import MagicLink from '../../screens/Auth/MagicLink/MagicLink';


const stack = createNativeStackNavigator()


const AuthStack: React.FC = () => {
    const  [user,setUser]=useState(true)
    return (
        
        <stack.Navigator screenOptions={{headerShown:false}}>
     
        <stack.Screen component={Login} name='Login'/>
        <stack.Screen component={Signup} name='Signup'/>
        <stack.Screen component={ResetPassword} name='ResetPassword'/>
        <stack.Screen component={UpdatePassword} name='UpdatePassword'/>
        <stack.Screen component={MagicLink} name='MagicLink'/>
        
        {/* <stack.Screen component={} name=''/> */}
    
        </stack.Navigator>
    )
}

export default AuthStack;