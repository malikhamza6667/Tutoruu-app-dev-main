import React from "react";
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Details from "../../layouts/Details/Details";
import Colors from "../../../assets/Colors";
import Button from "../../components/Button/Button";


const TutorAccepted = () => {

    return (
        <Details headerTitle="Application Status">
            <View
                style={[tw` flex-0.9 justify-center`]}
            >

                <Image
                    source={require('../../../assets/payment.jpg')}
                    style={tw`h-20 w-20 self-center`}
                />
                <Text
                    style={[tw`self-center mt-2 `, { color: Colors.orange, fontFamily: 'PoppinsBold', fontSize: hp('2.4') }]}
                >Tutor Accepted</Text>

                <View
                    style={tw`w-70  self-center`}
                >

                    <Text
                        style={[tw`self-center`, { fontFamily: 'PoppinsRegular', textAlign: 'center' }]}
                    >Head to your new tutor dashboard and start teaching</Text>
                </View>

                <View
                style={tw`mt-3`}
                >
                    <Button
                        onPress={() => { alert('predded') }}
                        text='Take me there'
                        shape="default"

                    />
                </View>

            </View>
        </Details>
    )
}


export default TutorAccepted