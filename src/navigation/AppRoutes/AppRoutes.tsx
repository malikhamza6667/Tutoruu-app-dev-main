import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from '../AuthNavigations/AuthStack';
import MainStack from '../StudentNavigations/AppStackStudent';
import TutorAppStack from '../TutorNavigations/TutorAppStack';
const stack = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
    const  [isStudent,setIsStudent]=useState(true)
    return (
        
        <stack.Navigator screenOptions={{headerShown:false}}>
     {
        isStudent ? 
        <stack.Screen component={MainStack} name='MainStackStudent'/>
        :
        <stack.Screen component={TutorAppStack} name='TutorAppStack'/>
     }
        </stack.Navigator>
    )
}

export default AppRoutes;