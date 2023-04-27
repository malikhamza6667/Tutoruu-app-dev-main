import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NavLinkUser from "../NavLinkUser/NavLink";
import NotificationScreen from "../../screens/Notification/Notification";
import Search from "../../screens/Search/Search";
import SupportSubmitted from "../../screens/SupportSubmitted/SupportSubmitted";
import Class from "../../screens/Class/Class";
import ClassSelection from "../../screens/ClassSelection/ClassSelection";
import Chat from "../../screens/Chat/Chat";
import Chats from "../../screens/Chats/Chats";
import EditProfile from "../../screens/EditProfile/EditProfile";
import FollowList from "../../screens/FollowList/FollowList";
import Sessions from "../../screens/Sessions/Sessions";
import SessionCompleted from "../../screens/SessionCompleted/SessionCompleted";
import SessionConfirmation from "../../screens/SessionConfirmation/SessionConfirmation";
import TopicSelection from "../../screens/TopicSelection/TopicSelection";
import TimeSelection from "../../screens/TimeSelection/TimeSelection";
import UserProfile from "../../screens/UserProfile/UserProfile";
import TutorProfile from "../../screens/TutorProfile/TutorProfile";
import TutorRequested from "../../screens/TutorRequested/TutorRequested";
import Details from "../../layouts/Details/Details";
import PaymentStatus from "../../screens/PaymentStatus/PaymentStatus";
import NavLinkTutor from "../TutorNavLink/TutorNavLink";
import SessionRequest from "../../screens/SessionRequest/SessionsRequest";


const stack= createNativeStackNavigator()


const TutorMainFLow=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="NavLinkTutor" component={NavLinkTutor} />
            <stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <stack.Screen name="Search" component={Search} />
            <stack.Screen name="SupportSubmitted" component={SupportSubmitted} />
            <stack.Screen name="Chat" component={Chat} />
            <stack.Screen name="Chats" component={Chats} />
            <stack.Screen name="EditProfile" component={EditProfile} />
            <stack.Screen name="FollowList" component={FollowList} />
            <stack.Screen name="Sessions" component={Sessions} />
            <stack.Screen name="SessionRequest" component={SessionRequest} />
           
           
            <stack.Screen name="UserProfile" component={UserProfile} />
          
           
            
        </stack.Navigator>
    )
}

export default TutorMainFLow