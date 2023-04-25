import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import StartApplication from "../../screens/StartApplication/StartApplication";
import ApplicationQuestionnare from "../../screens/ApplicationQuestionnaire/ApplicationQuestionnaire";
import ApplicationStatus from "../../screens/ApplicationStatus/ApplicationStatus";
import TutorAccepted from "../../screens/TutorAccepted/TutorAccepted";
import Details from "../../layouts/Details/Details";
import { ActivityIndicator, View } from "react-native";
import Colors from "../../../assets/Colors";

const stack= createNativeStackNavigator()

type Props={
    navigation?:any,

}

const LoadingScreen:React.FC<Props>=({navigation})=>{
    const[applicationSent,setApplicationSent]=useState(true)
    const[applicationAccepted,setApplicationAccepted]=useState(false)
    const[initialRoute,setinitialRoute]=useState('')
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            if(applicationSent){
                if(applicationAccepted){
                    navigation.navigate('TutorAccepted')
                    setinitialRoute('TutorAccepted')
                }
                else if(applicationAccepted){
                    navigation.navigate('ApplicationStatus')
                    setinitialRoute('ApplicationStatus')
                  
                }
                else{
                    navigation.navigate('ApplicationStatus')
                }
            }
            else if (!applicationSent){
                navigation.navigate('StartApplication')
                setinitialRoute('StartApplication')
            }
           setLoading(false) 
        }, 100);
console.log("Value is",initialRoute)
    },[applicationSent, applicationAccepted])
    return(
        <View style={{flex:1,justifyContent:'center'}}>
        <ActivityIndicator
        size={'large'}
        style={{alignSelf:'center'}}
        color={Colors.orange}
        />
    </View>
    )
}
const TutorApplicationFlow:React.FC<Props>=({navigation})=>{
    
    return(
  
  <stack.Navigator  screenOptions={{headerShown:false}}>
            <stack.Screen component={LoadingScreen} name="LoadingScreen"/>
            <stack.Screen component={StartApplication} name="StartApplication"/>
            <stack.Screen component={ApplicationQuestionnare} name="ApplicationQuestionnare"/>
            <stack.Screen component={ApplicationStatus} name="ApplicationStatus"/>
            <stack.Screen component={TutorAccepted} name="TutorAccepted"/>
            
        </stack.Navigator>
      
    )
}

export default TutorApplicationFlow