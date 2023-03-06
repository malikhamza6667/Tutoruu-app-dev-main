import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from '../AuthNavigations/AuthStack';
import AppRoutes from './AppRoutes';

const stack = createNativeStackNavigator()

const MainAppRoutes: React.FC = () => {
    const  [isLogged,setIsLogged]=useState(true)
    return (
        
        <stack.Navigator screenOptions={{headerShown:false}}>
     {
        isLogged ? 
        <stack.Screen component={AppRoutes} name='AppRoutes'/>
        :
        <stack.Screen component={AuthStack} name='AuthStack'/>
     }
        </stack.Navigator>
    )
}

export default MainAppRoutes;