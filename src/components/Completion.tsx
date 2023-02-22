import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";
import Spacer from "./Spacer";

interface Props {
    text: string;
    image: any;
    color: any;
}

const Completion: React.FC<Props> = ({ image, text, color }) => {

    return (
        <View>
            <Image source={image} style={styles.image} />
            <Spacer />
            <Text style={[styles.heading, { color }]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: hp('15%'),
        width: wp('25%'),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    heading: {
        fontStyle: 'normal',
        fontSize: hp('2.5'),
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
    }
})

export default Completion