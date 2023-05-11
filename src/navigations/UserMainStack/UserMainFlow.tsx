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
import TutorMainFLow from "../TutorMainStack/TutorMainFlow";
import ResetPassword from "../../screens/Auth/ResetPassword/ResetPassword";
import UpdatePassword from "../../screens/Auth/UpdatePassword/UpdatePassword";
import MagicLink from "../../screens/Auth/MagicLink/MagicLink";


const stack= createNativeStackNavigator()


const UserMainFlow=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="NavLinkUser" component={NavLinkUser} />
            <stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <stack.Screen name="Search" component={Search} />
            <stack.Screen name="SupportSubmitted" component={SupportSubmitted} />
            <stack.Screen name="Class" component={Class} />
            <stack.Screen name="ClassSelection" component={ClassSelection} />
            <stack.Screen name="Chat" component={Chat} />
            <stack.Screen name="Chats" component={Chats} />
            <stack.Screen name="EditProfile" component={EditProfile} />
            <stack.Screen name="FollowList" component={FollowList} />
            <stack.Screen name="Sessions" component={Sessions} />
            <stack.Screen name="SessionCompleted" component={SessionCompleted} />
            <stack.Screen name="SessionConfirmation" component={SessionConfirmation} />
            <stack.Screen name="TopicSelection" component={TopicSelection} />
            <stack.Screen name="TimeSelection" component={TimeSelection} />
            <stack.Screen name="UserProfile" component={UserProfile} />
            <stack.Screen name="TutorProfile" component={TutorProfile} />
            <stack.Screen name="TutorRequested" component={TutorRequested} />
            <stack.Screen name="PaymentStatus" component={PaymentStatus} />
            {/*This Is Tutor MainFlow We Duplicated It for the Purpose if the User Is Not Tutor,
             He Can Be Registered As A Tutor And GO To Dashboard and On Next Login He Will be directed to TutorDashboard  */}
            <stack.Screen name="TutorMainFLow" component={TutorMainFLow} />
            {/* These Screens Exists In The Auth Flow so we need to duplicate 
            them here inorder to get to these screen else only logout will take to these screens
            
            
            */}
            <stack.Screen name="ResetPassword" component={ResetPassword} />
            <stack.Screen name="UpdatePassword" component={UpdatePassword} />
            <stack.Screen name="MagicLink" component={MagicLink} />
            
        </stack.Navigator>
    )
}

export default UserMainFlow