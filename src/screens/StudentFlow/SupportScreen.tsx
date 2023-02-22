import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../../assets/Colors';
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
import Btn from "../../components/Button";
import Header from "../../components/Header";


interface Props {
    navigation: any;
}

const SupportScreen: React.FC<Props> = ({ navigation }) => {
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
        <SafeAreaView style={styles.container} >
            <View style={styles.innerContainer}>

                <Header headerTitle="Support" />
                <View style={styles.para}>
                    <Text style={styles.text} >{Strings.ST17} </Text>
                    <Text style={[styles.text, { marginTop: hp('2') }]}>{Strings.ST18} </Text>
                </View>
                <Text style={styles.send}> {Strings.ST19} </Text>
                <Text style={styles.label}> {Strings.ST20} </Text>
                <TextInput
                    placeholder="Doe.."
                    placeholderTextColor={Colors.fadedgray}
                    style={[styles.input, { textAlignVertical: 'top', padding: hp('2%') }]}
                    numberOfLines={5}
                    multiline={true}
                />
                <Text style={styles.label}> {Strings.ST21} </Text>
                <TextInput
                    placeholder="Doe.."
                    placeholderTextColor={Colors.fadedgray}
                    style={[styles.input, { textAlignVertical: 'top', padding: hp('2%'), height: hp('10'), borderRadius: hp('2') }]}
                    numberOfLines={5}
                    multiline={true}
                />
                <Btn text='Submit' route='Payment' width={wp('20%')} height={hp('4%')} />
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // alignItems: 'center',
        // justifyContent: "center"
    },
    innerContainer: {
        width: wp('95%'),
        height: hp('100%'),
        // backgroundColor: 'red', 
        alignSelf: 'center',
        margin: hp('1')
    },
    para: {
        alignSelf: 'center',
        // backgroundColor: 'red',
        marginTop: hp(10),
        justifyContent: 'center',
        textAlign: 'center',
        width: wp('90'),
    },
    text: {
        fontSize: hp('1.7'),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.black,
        // flexGrow: 1,
        // textAlign:'center'
    },
    label: {
        fontSize: hp('1.5'),
        fontWeight: '500',
        lineHeight: 21,
        fontStyle: 'normal',
        marginLeft: hp('2'),
        margin: hp('1')
    },
    input: {
        borderRadius: hp('3'),
        borderWidth: 1,
        borderColor: Colors.fadedgray,
        width: wp('86%'),
        height: hp('5%'),
        fontWeight: '500',
        fontSize: hp('1.5%'),
        // padding:hp('5'),
        alignSelf: 'center'
    },
    send: {
        fontStyle: 'normal',
        fontWeight: '400',
        width: wp('90%'),
        fontSize: hp('1.7'),
        lineHeight: 21,
        // marginLeft: 10,
        marginTop: hp('20%'),
        // marginBottom: 20,
        // backgroundColor: 'pink',
        alignSelf: 'center'
    }
});
export default SupportScreen