import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PaymentScreen from '../screens/StudentFlow/PaymentScreen';
import Notification from '../screens/StudentFlow/NotificationScreen';
import Edit from '../screens/StudentFlow/EditProfileScreen';
import Followers from '../screens/StudentFlow/FollowersScreen';
import SearchScreen from '../screens/StudentFlow/SearchScreen';
import Root from './drawerNavigator';
import SuccessScreen from '../screens/StudentFlow/PaymentSuccessScreen';
import FailedScreen from '../screens/StudentFlow/PaymentFailedScreen';
import PickClass from '../screens/StudentFlow/PickClassScreen';
import PickTime from '../screens/StudentFlow/PickTimeScreen';
import PickTopic from '../screens/StudentFlow/PickTopicScreen';
import PickLocation from '../screens/StudentFlow/PickLocationScreen';
import RequestedScreen from '../screens/StudentFlow/TutorRequestedScreen';
import SessionConfirmationMain from '../screens/StudentFlow/SessionConfirmation/SessionMain';
import SessionReviewScreen from '../screens/StudentFlow/SessionConfirmation/SessionReview';
const Stack = createNativeStackNavigator();
const MainStack: React.FC = () => {
    return (
       
            <Stack.Navigator >
                <Stack.Screen name='Root' component={Root} options={{ headerShown: (false) }} />
                <Stack.Screen name='Payment' component={PaymentScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='Notification' component={Notification} options={{ headerShown: (false) }} />
                <Stack.Screen name='Edit' component={Edit} options={{ headerShown: (false) }} />
                <Stack.Screen name='Followers' component={Followers} options={{ headerShown: (false) }} />
                <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='Success' component={SuccessScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='Failed' component={FailedScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='PickClass' component={PickClass} options={{ headerShown: (false) }} />
                <Stack.Screen name='PickTime' component={PickTime} options={{ headerShown: (false) }} />
                <Stack.Screen name='PickTopic' component={PickTopic} options={{ headerShown: (false) }} />
                <Stack.Screen name='PickLocation' component={PickLocation} options={{ headerShown: (false) }} />
                <Stack.Screen name='RequestedScreen' component={RequestedScreen} options={{ headerShown: (false) }} />
                <Stack.Screen name='SessionConfirmationMain' component={SessionConfirmationMain} options={{ headerShown: (false) }} />
                <Stack.Screen name='SessionReviewScreen' component={SessionReviewScreen} options={{ headerShown: (false) }} />
            </Stack.Navigator>
       
    )
}
export default MainStack