import React from "react";

import {View,Text,Image} from 'react-native'
import Details from "../../layouts/Details/Details";
import Colors from "../../../assets/Colors";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

import tw from 'twrnc';
import { Card } from "../../layouts/Card/Card";
import Button from "../../components/Button/Button";

const TutorRequested:React.FC=()=>{
    return(
        <Details headerTitle="FILM 3021 Tutors">


        <View style={[tw`flex-1 pb-20 justify-evenly items-center`]}>
            <View>

            <Image
            style={{height: hp('15%'),width: wp('30%'),alignSelf:'center'}}
            source={require('./../../../assets/requested.jpg')}
            resizeMode="contain"
            />
            <View style={tw` px-10  items-center`}>
            <Text style={[tw`text-xl`,{fontFamily:'PoppinsBold',color: Colors.orange}]}>Tutor Requested!</Text>
            <Text style={[tw`text-sm`,{fontFamily:'PoppinsRegular',textAlign:'center'}]}>We’re on the lookout for Film 330 tutors and we’ll ping you as soon as we find any.</Text>

            </View>
            </View>
            <View>
                <Card>
                <View style={tw` px-6 py-4`}>
            <Text style={[tw`text-sm py-1`,{fontFamily:'PoppinsBold'}]}>Know any other FILM 330 students?</Text>
            <Text style={[tw`text-sm py-1`,{fontFamily:'PoppinsRegular',textAlign:'justify'}]}>More enrolled students means more attractive classes to teach for tutors. Speed up the process by inviting your classmates</Text>
<View>
    <Button
    shape="default"
    text='Invite'
    onPress={()=>{alert('Pressed')}}
    />
</View>
            </View>

                </Card>
            </View>
        </View>
        </Details>
    )
}

export default TutorRequested