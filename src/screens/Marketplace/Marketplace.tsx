import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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


const Marketplace = ({ navigation }) => {
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
    return (
        <Base
            userName='Maryam'
            isTutor={false}
        >
            <Separator type="line" />
            <Spacer />

            <View

                style={tw`items-center mt-4`}>

                <Input
                    size="xlarge"
                    placeholder="Add class "
                    iconPosition="right"
                    icon="AntDesign plus 20 gray"

                />
                <View>
                    <Section title='Upcoming Sessions'>
                        <SessionCard
                            time="2.30Pm"
                            location="online"
                            is_accepted={false}
                            day='Monday'
                            class_name="Macro economics 135"
                        ></SessionCard>
                    </Section>
                </View>

                <TouchableOpacity
                    onPress={() => { alert('pressed')}}
                >

                    <Text
                        style={[tw``, { color: Colors.orange, fontFamily: 'PoppinsBold' }]}
                    >View all sessions</Text>
                </TouchableOpacity>


                <View >
                    <Section title="Tutors Recommendations">
                        <HorizontalList
                            contentContainerStyle={{ paddingVertical: hp('3.5%') }}
                            data={Data}
                            renderItem={({ item }) => {
                                return (
                                    <TutorCard
                                        classes={TutorSubjects}
                                        user={{ name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe', bio: 'Hello world', is_tutor: true }}
                                        num_sessions={4}
                                        rating={2}
                                        onPress={() => { alert('Pressed') }}
                                        rate={'270 EGP'}
                                        text={'PhD student in the Industrial & Systems Engineering Department…'}
                                    />
                                )
                            }}
                            keyExtractor={(item) => { return item.id.toString() }}
                        />

                    </Section>
                </View>
            </View>
        </Base>
    )
}



export default Marketplace