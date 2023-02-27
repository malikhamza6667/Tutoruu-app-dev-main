import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from '../AuthNavigations/AuthStack';
import MainStack from './AppStackStudent';
const stack = createNativeStackNavigator()


const StudentStackMain: React.FC = () => {
    const  [user,setUser]=useState(true)
    return (
        
        <stack.Navigator screenOptions={{headerShown:false}}>
     {
        user ? 
        <stack.Screen component={MainStack} name='MainStackStudent'/>
        :
        <stack.Screen component={AuthStack} name='AuthStackStudent'/>
     }
        </stack.Navigator>
    )
}

export default StudentStackMain;