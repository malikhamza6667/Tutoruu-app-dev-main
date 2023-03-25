import React from "react";
import { View } from "react-native";
import { Separator } from "../../components/Separator/Separator";
import Spacer from "../../components/Spacer/Spacer";
import TutorCard from "../../components/TutorCard/TutorCard";
import Base from "../../layouts/Base/Base";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import { tutorData, TutorSubjects } from "../DummyData";
import Heading from "../../components/Heading/Heading";


const Marketplace = () => {
    return (
        <Base
            userName='Maryam'
            isTutor={false}
        >
            <Separator type="line" />
            <Spacer />
            <View

                style={[
                    tw` `
                ]}
            >
                <Heading heading="Tutor recommendations" />
                <HorizontalList
                    data={tutorData}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TutorCard
                                    classes={TutorSubjects}
                                    user={item.user}
                                    num_sessions={item.num_sessions}
                                    rating={item.rating}
                                    onPress={item.onPress}
                                    rate={item.rate}
                                    text={item.text}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}
                />
            </View>
        </Base>
    )
}



export default Marketplace