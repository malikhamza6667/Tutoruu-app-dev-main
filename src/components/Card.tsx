import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";
import Btn from "./Button";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';

interface Props {
    text: string;
    heading: string;
}

const Card: React.FC<Props> = ({ text, heading }) => {
    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {

        const language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
        else if (language === 'es') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (
        <View style={[styles.card]}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.text}> {text} </Text>
            <Btn text={Strings.ST64} height={hp('4%')} width={wp('20%')} route={''} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 15,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        shadowRadius: 5,
        // alignItems: 'center',
        justifyContent: 'center',
        // width: 314,
        width: wp('82%'),
        height: 185,
        paddingHorizontal: wp('3%'),
        // paddingTop:20
    },
    text: {
        fontSize: hp('1.6%'),
        fontWeight: '400',
        lineHeight: 21,
        // backgroundColor:'red'
    },
    heading: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: hp('1.6%'),
        lineHeight: 21,
        // backgroundColor:'red'
    }
})

export default Card