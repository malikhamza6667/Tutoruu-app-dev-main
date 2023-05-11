import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationStack from "../AuthenticationFlow/AuthenticationStack";
import UserMainFlow from "../UserMainStack/UserMainFlow";
import TutorMainFLow from "../TutorMainStack/TutorMainFlow";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/Redux/store/Store";

const stack = createNativeStackNavigator()

const MainAppRoutes = () => {
    const token = useSelector((state: RootState) => state.userInformationReducer.token)
    const isTutor = useSelector((state: RootState) => state.userInformationReducer.isTutor)
    return (
        <stack.Navigator screenOptions={{ headerShown: false }} >
            {token ?
                <stack.Group>

                    {
                        isTutor ?
                            <stack.Screen name="TutorMainFLow" component={TutorMainFLow} />
                            :
                            <stack.Screen name="UserMainFlow" component={UserMainFlow} />
                    }
                </stack.Group>
                :
                <stack.Screen name="AuthenticationStack" component={AuthenticationStack} />




            }
        </stack.Navigator>
    )
}

export default MainAppRoutes