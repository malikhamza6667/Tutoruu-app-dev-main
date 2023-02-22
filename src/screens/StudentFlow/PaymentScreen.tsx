import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../../assets/Colors';
import Completion from "../../components/Completion";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';


const PaymentScreen: React.FC = () => {
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
            <Header headerTitle="Payment" />
            <View style={styles.innerContainer}>
                <Completion
                    image={require('../../../assets/payment.jpg')}
                    text={Strings.ST23}
                    color={Colors.orange}
                />
                <Spacer />
                <Paragraph paragraphText={Strings.ST22} />
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
        width: wp('95%'),
        height: hp('100%'),
        alignSelf: 'center',
        // justifyContent: 'center',
        margin: hp('3'),
        // backgroundColor:'yellow',
        marginTop: hp('20%'),
        alignItems: 'center'
    },

});
export default PaymentScreen