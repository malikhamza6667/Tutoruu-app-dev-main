import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Completion from "../../components/Completion";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import PaymentCard from "../../components/PaymentCard";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';


const FailedScreen: React.FC = () => {
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
        <SafeAreaView style={styles.container}>
            <Header
                headerTitle="Payment"
            />
            <View style={styles.innerContainer}>
                <Completion
                    image={require('../../../assets/failed.jpg')}
                    text={Strings.ST50}
                    color={Colors.black}
                />
                <Text style={styles.try}> {Strings.ST51} </Text>
                <Btn
                    text={Strings.ST52}
                    route={() => { }}
                    width={wp('72%')}
                    height={hp('4.5%')}
                />
                <Spacer />
                <Divider />
                <Spacer />
                <Spacer />
                <PaymentCard
                    text={Strings.ST53}
                />
                <Spacer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: wp('99%'),
        height: hp('100%'),
        alignSelf: 'center',
        margin: 10,
        marginTop: hp('10%'),
        // backgroundColor:'red'
    },
    text: {
        fontSize: hp('2%'),
        fontFamily: 'PoppinsBold',
        lineHeight: 18,
        color: Colors.black,
    },
    btn: {
        alignItems: 'center'
    },
    btnText: {
        fontSize: hp('2%'),
        fontFamily: 'PoppinsBold',
        lineHeight: 21,
        color: Colors.orange
    },
    try: {
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: hp('2%'),
        lineHeight: 21,
        color: Colors.black
    }
})
export default FailedScreen