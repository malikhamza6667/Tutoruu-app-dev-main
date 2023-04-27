import React from "react";

import {View,Text, ScrollView} from 'react-native'
import Base from "../../layouts/Base/Base";
import Box from "../../components/Box/Box";
import tw from 'twrnc';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../components/Button/Button";
import Section from "../../layouts/Section/Section";
import { Card } from "../../layouts/Card/Card";
import Quest from "../../components/Quest/Quest";
type Props={
    navigation?:any
}
const TutorDashboard:React.FC<Props>=({navigation})=>{
    return(
<Base isTutor userName="Ragnar">
    
    <View style={[tw`py-2 pt-4`]}>
        <Box text="Connect to your google calendar to sync your sessions with your schedule. "/>

    </View>
    <View style={[tw`py-2`]}>
       <Button
       shape="default"
       onPress={()=>{alert('Pressed')}}
       text="Update Schedule"
       /> 
    </View>
    <ScrollView contentContainerStyle={{paddingBottom:hp('5%')}}>

    <View style={[tw`py-2`]}>
        <Section title="Tutoruu Academy ">
            <Card>
                <View style={[tw`px-5 py-3`]}>
                    <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Episode 1 - Starting out with Tutoruu Academy</Text>
                    <Text style={[tw`text-sm py-2`,{fontFamily:'PoppinsRegular',textTransform:'capitalize'}]}>This lesson is an introduction to our Tutoruu Academy series where you will learn essential lessons to succeed in your Tutoring Journey.</Text>
               <Button
               shape="default"
               text="Watch"
               onPress={()=>{navigation.navigate('AuthenticationStack')}}
iconPosition="left"

icon="Entypo video-camera 24 white"               
               />
                </View>
            </Card>

        </Section>
    </View>
    <View style={[tw`py-2`]}>
        <Section title="Upcoming Sessions" pressableSubtitle="View All Sessions" onPressSubtitle={()=>{navigation.navigate('Sessions',{
            is_Tutor:true
        })}}>
            <Card>
                <View style={[tw`px-5 py-3`]}>
                    <Text style={[tw`text-base py-2`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>No upcoming sessions</Text>
                    <Text style={[tw`text-sm py-2`,{fontFamily:'PoppinsRegular',textTransform:'capitalize'}]}>Want to get more sessions? Watch Tutoruu academy videos to get the know-how.</Text>
                </View>
            </Card>

        </Section>
    </View>

    <View style={[tw`px-5`]}>
      <Text style={[tw`text-base py-1`,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Quests</Text>
      <Text style={[tw`text-sm `,{fontFamily:'PoppinsMedium',textTransform:'capitalize'}]}>Earn rewards with quests and become a better tutor</Text>

    <Quest name='Title' reward={'20'} progres= {30} total_attempts_needed={5} />
     
    </View>
    </ScrollView>
</Base>
    )
}

export default TutorDashboard