import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../../assets/Colors";
import Header from "../../components/Header";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
import Spacer from "../../components/Spacer";
import Divider from "../../components/Divider";
import Heading from "../../components/Heading";
import Btn from "../../components/Button";
import Field from "../../components/InputField";
import User from "../../components/UserProfile";
import UserImage from "../../components/userImage";



interface Props {
    followers: number;
}

const Edit: React.FC<Props> = ({ followers }) => {
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
            <Header headerTitle={Strings.ST33} />
            <Spacer />
            <View style={styles.userProfileContainer}>
                <UserImage width={wp('20%')} height={hp('10%')} />
                <User route={''} />
            </View>
            <Spacer />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} > Update </Text>
            </TouchableOpacity>
            <Spacer />
            <Divider />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <View style={{ justifyContent: 'center', alignSelf: 'center', width: '95%', }}>
                    <Heading title={Strings.ST26} />
                    <Field height={hp('15%')} borderRadius={20} width={wp('87%')} />
                </View>
                <Spacer />
                <View style={styles.grid}>
                    <View style={styles.row1} >
                        <View style={styles.box1}>
                            <Heading title={Strings.ST34} />
                            <Field borderRadius={50} width={wp('44%')} height={hp('4%')} />
                        </View>
                        <View style={styles.box2}>
                            <Heading title={Strings.ST35} />
                            <Field borderRadius={50} width={wp('30%')} height={hp('4%')} />
                        </View>
                    </View>
                    <Spacer />
                    <View style={styles.row2}>
                        <View style={styles.box3}>
                            <Heading title={Strings.ST36} />
                            <Field borderRadius={50} width={wp('44%')} height={hp('4%')} />
                        </View>
                        <View style={styles.box4}>
                            <Heading title={Strings.ST37} />
                            <Field borderRadius={40} width={wp('30%')} height={hp('4%')} />
                        </View>
                    </View>
                </View>
            </View>
            <Btn text={Strings.ST38} width={wp('85%')} height={hp('6%')} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        width: wp('95%'),
        alignSelf: 'center',
        height: hp('100%')
    },
    userProfileContainer: {
        flexDirection: 'row',
        height: hp('10%'),
        width: wp('95%'),
        alignSelf: 'center',
        marginLeft: hp('2%'),
    },
    grid: {
        width: wp('90%'),
        alignSelf: 'center',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    box1: {
        width: wp('50%'),
    },
    box2: {
        width: wp('40%')
    },
    box3: {
        width: wp('50%')
    },
    box4: {
        width: wp('40%')
    },
    btn: {
        // alignItems: 'center',
        // backgroundColor:'red',
        width: wp('20%'),
        marginHorizontal: wp('5'),
    },
    btnText: {
        fontSize: hp('1.8%'),
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.orange
    }
})

export default Edit