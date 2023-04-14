import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed/Feed';
import DrawerNav from '../Drawer/Drawer';


const stack = createNativeStackNavigator()


const StudentStackMain: React.FC = () => {
    const  [user,setUser]=useState(true)
    return (
        
        <stack.Navigator>

     
        {/* <stack.Screen component={DrawerNav} name='DrawerNav'/> */}
        <stack.Screen component={Feed} name='FeedScreen'/>
        
        {/* <stack.Screen component={} name=''/> */}
    
        </stack.Navigator>
    )
}

export default StudentStackMain;