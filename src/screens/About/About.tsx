import React  from "react";
import { View, Text, Image } from "react-native";
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";



const About = () => {
 
 
    return (
        <Details
            headerTitle="About"
        >
            <View
                style={[
                    tw`items-center justify-center flex-0.6` 
                ]}
                testID='logo'
            >
                <Image
                    source={require('../../../assets/logo.jpg')}
                    resizeMode='contain'
                    testID='image'
                    style={[
                        tw`py-10`
                    ]}
                />
                <Text
                testID="mission-statement"
                    style={[
                        tw`px-15 text-center`, { fontFamily: 'PoppinsRegular' }
                    ]}
                >Our mission is to ensure that students are academically, mentally and financially empowered throughout their university experience.
                </Text>
            </View>
        </Details>
    )
}

export default About