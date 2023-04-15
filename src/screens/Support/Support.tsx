import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";
import Input from "../../components/Input/Input";
import Section from "../../layouts/Section/Section";
import Spacer from "../../components/Spacer/Spacer";
import Button from "../../components/Button/Button";

const Support = () => {
    return (
        <Details headerTitle="Support">
            <View
                style={[tw`flex-0.9 self-center`, { width: wp('95%') }]}
            >
                <Text
                    style={[tw``, { fontFamily: 'PoppinsRegular' }]}
                >The Tutoruu Fam prioritizes YOUR wellbeing, first and foremost. Let us know how we can help at anytime, We love to chat!

                Send us a message on Messenger by clicking the button below</Text>
                <View
                    style={[tw``, { marginTop: hp('20') }]}
                >

                    <Section >

                        <Text
                            style={[tw``, { fontFamily: 'PoppinsRegular' }]}
                        >Or by sending an email</Text>
                        <Spacer />
                        <Input
                            title="Email"
                            placeholder="Doe"
                            size="xlarge"
                        />
                        <Input
                            title="Message"
                            placeholder="Doe"
                            size="Xlarge"
                        />
                        <Spacer />
                        <Spacer />
                        <Button
                            shape="default"
                            text="Submit"
                        />
                    </Section>
                </View>
            </View>
        </Details>
    )
}
export default Support