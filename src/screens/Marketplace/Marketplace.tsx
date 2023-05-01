import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Separator } from "../../components/Separator/Separator";
import Spacer from "../../components/Spacer/Spacer";
import TutorCard from "../../components/TutorCard/TutorCard";
import Base from "../../layouts/Base/Base";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { tutorData, TutorSubjects } from "../DummyData";
import Heading from "../../components/Heading/Heading";
import Section from "../../layouts/Section/Section";
import SessionCard from "../../components/SessionCard/SessionCard";
import Input from "../../components/Input/Input";
import Colors from "../../../assets/Colors";

const ClassesData = [
    'CSCE-1521',
    'RHET-32'
]
type Props={
    navigation:any
}
const Marketplace:React.FC<Props> = ({ navigation }) => {
    const Data = [
        {

            id: 1,
            name: 'abcd',
        },
        {

            id: 2,
            name: 'nabcd',
        },

    ]
    const[newClass,setNewClass]=useState('')
    return (
        <Base
            userName='Maryam'
            isTutor={false}
        >
            <Separator type="line" />
            <Spacer />
<ScrollView contentContainerStyle={{paddingBottom:hp('2%')}}>

            <View

                style={tw`items-center mt-2`}>

                <Input
                value={newClass}
                onIconPressed={()=>{alert('New Class Added !')}}
                onChangeText={(text)=>{setNewClass(text)}}
                    size="Xlarge"
                   height={hp('5%')}
                    placeholder="Add class"
                    iconPosition="right"
                    icon="AntDesign plus 18 gray"

                />
                <View>
                <View  style={[tw`px-3 mt-1`,{width:wp('90%'), height: hp('7%') }]}>

<HorizontalList

    data={ClassesData.slice(0, 4)}
    renderItem={({ item }) => {
        return (
            <View

                style={[tw`rounded-full self-center py-1 px-2  m-0.5  items-center`,{ backgroundColor: Colors.gray }]}
                >
                <Text

                    style={{ color: Colors.black, textTransform: "uppercase", fontFamily: 'PoppinsMedium' }}
                    className='text-sm '>{item}</Text>
            </View>
        )
    }}
    keyExtractor={(item, index) => { return index.toString() }}
/>
</View>  
                </View>
                <View style={[tw`px-3`]}>
                    <Section title='Upcoming Sessions' pressableSubtitle="View All Sessions" onPressSubtitle={()=>{navigation.navigate('Sessions',{
                        is_Tutor:false
                    })}}>
                        <SessionCard
                            time="2.30Pm"
                            location="online"
                            is_accepted={false}
                            day='Monday'
                            class_name="Macro economics 135"
                        ></SessionCard>
                    </Section>
                </View>

              


                <View style={[tw`px-3`]}>
                    <Section title="Tutors Recommendations">
                    <TutorCard
                                        classes={TutorSubjects}
                                        user={{ name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe', bio: 'Hello world', is_tutor: true }}
                                        num_sessions={4}
                                        rating={2}
                                       
                                         onPress={() => { navigation.navigate('TutorProfile') }}
                                        rate={'270 EGP'}
                                        text={'PhD student in the Industrial & Systems Engineering Department…'}
                                    />

                    </Section>
                </View>
            </View>
</ScrollView>
        </Base>
    )
}



export default Marketplace