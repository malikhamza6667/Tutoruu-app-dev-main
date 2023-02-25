import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import PaymentTag from "./PaymentTag";

interface Props {
    text: string;
}
const PaymentCard: React.FC<Props> = ({ text }) => {
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
        <View style={[styles.card, { width: wp('80%'), height: hp('13%') }]}>
            <PaymentTag text={text} />
            <Text style={[styles.text, { color: Colors.orange }]}>{Strings.ST45} </Text>
            <Text style={styles.day}>{Strings.ST46}</Text>
            <Text style={styles.text}>{Strings.ST47}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        padding: hp('1.5%'),
        shadowRadius: 5,
        // padding: 40,
        // marginVertical: 10,
        // backgroundColor: 'red'
    },
    text: {
        fontSize: hp('1.6%'),
       fontFamily:'PoppinsRegular',
        lineHeight: 21,
    },
    day: {
        fontSize: hp('1.8%'),
        fontFamily:'PoppinsRegular',
        lineHeight: 24,
        color: Colors.black
    },
})

export default PaymentCard