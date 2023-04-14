import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed/Feed';
import Login from '../../screens/Auth/Login/Login';
import Signup from '../../screens/Auth/Signup/Signup';
import ResetPassword from '../../screens/Auth/ResetPassword/ResetPassword';
import UpdatePassword from '../../screens/Auth/UpdatePassword/UpdatePassword';
import MagicLink from '../../screens/Auth/MagicLink/MagicLink';
import StartApplication from '../../screens/StartApplication/StartApplication';
import ApplicationQuestionnare from '../../screens/ApplicationQuestionnaire/ApplicationQuestionnaire';
import ApplicationStatus from '../../screens/ApplicationStatus/ApplicationStatus';
import Marketplace from '../../screens/Marketplace/Marketplace';
import Profile from '../../screens/Profile/Profile';


const stack = createNativeStackNavigator()


const TutorStack: React.FC = () => {
    const  [user,setUser]=useState(true)
    return (
        
        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Profile'>
     
        <stack.Screen component={StartApplication} name='StartApplication'/>
        <stack.Screen component={ApplicationQuestionnare} name='ApplicationQuestionnare'/>
        <stack.Screen component={ApplicationStatus} name='ApplicationStatus'/>

        <stack.Screen component={Marketplace} name='Marketplace'/>
        <stack.Screen component={Profile} name='Profile'/>
        
        {/* <stack.Screen component={} name=''/> */}
    
        </stack.Navigator>
    )
}

export default TutorStack;