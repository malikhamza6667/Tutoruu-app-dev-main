import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../../assets/Colors";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const RequestedScreen: React.FC = () => {
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <Header headerTitle="FILM 3021 Tutors" />
            <Spacer />
            <View style={styles.innerContainer}>
                <Image
                    source={require('../../../assets/requested.jpg')}
                    style={styles.image} />
                <Spacer />
                <Text style={[styles.heading]}> {Strings.ST61} </Text>
                <Spacer />
                <Paragraph paragraphText={Strings.ST62} />
                <Spacer />
                <Spacer />
                <Spacer />
                <Card text={Strings.ST63} heading={Strings.ST65} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center'
    },
    innerContainer: {
        width: wp('80%'),
        height: hp('70%'),
        alignSelf: 'center',
        // margin: 10,
        marginTop: hp('10%'),
        // backgroundColor: "red"
    },
    heading: {
        fontStyle: 'normal',
        fontSize: hp('3%'),
        fontWeight: '700',
        lineHeight: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: Colors.orange
    },
    image: {
        alignSelf: 'center',
        height: hp('15%'),
        width: wp('35%'),
        resizeMode: 'contain'
    }
})

export default RequestedScreen