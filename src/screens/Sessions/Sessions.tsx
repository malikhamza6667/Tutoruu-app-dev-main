import React from "react";

import {View,Text, ScrollView, FlatList, VirtualizedList} from 'react-native'
import Details from "../../layouts/Details/Details";
import Box from "../../components/Box/Box";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import tw from 'twrnc';
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { completedSessions, sessions } from "../DummyData";
import SessionCard from "../../components/SessionCard/SessionCard";

const Sessions:React.FC=()=>{
    return(
        <Details headerTitle="Sessions">
<View style={[tw`pt-2 py-1`]}>
    <Box text="Connect to your google calendar to sync your sessions with your schedule. "/>
</View>

<ScrollView>

        <View style={tw`py-2`}>
            <Text
            style={[tw`text-base px-8 py-4`,{fontFamily:'PoppinsBold'}]}>Upcoming Sessions</Text>
            <HorizontalList
            data={sessions}
                    horizontal={false}
                    renderItem={({ item, index }) => {
                        return (
<SessionCard
class_name={item.class_name}
day={item.day}
onPress={()=>{alert('Pressed')}}
isTutor={item.isTutor}
is_accepted={item.is_accepted}
location={item.location}
created_date={item.created_date}
is_completed={item.is_completed}
payment_amount={item.payment_amount}
time={item.time}

/>

                        )
                    } }  
                    keyExtractor={(item,index)=>{return index.toString()}}          
            />
        </View>
        <View style={tw`py-2`}>
        <Text
            style={[tw`text-base px-8 py-4`,{fontFamily:'PoppinsBold'}]}>Past Sessions</Text>
             <HorizontalList
             contentContainerStyle={{paddingBottom:hp('5%')}}
            data={completedSessions}
                    horizontal={false}
                    renderItem={({ item, index }) => {
                        return (
<SessionCard
class_name={item.class_name}
day={item.day}
onPress={()=>{alert('Pressed')}}
isTutor={item.isTutor}
is_accepted={item.is_accepted}
location={item.location}
created_date={item.created_date}
is_completed={item.is_completed}
payment_amount={item.payment_amount}
time={item.time}

/>

                        )
                    } }  
                    keyExtractor={(item,index)=>{return index.toString()}}          
            />
        </View>
</ScrollView>


        </Details>
    )
}

export default Sessions