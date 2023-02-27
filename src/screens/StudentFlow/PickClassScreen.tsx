import React, { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';

const messageData = [
    {
        id: 1,
        status: 'Online',
        subject: 'Financial Management',
        code: 'FIN201',
        rating: '4.74',
        sessions: '13'
    },
    {
        id: 2,
        status: 'Online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13'
    },
    {
        id: 3,
        status: 'Online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13'
    },
]
const PickClass: React.FC = () => {
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
            <Header headerTitle={Strings.ST54} />
            {/* <Spacer /> */}
            <Spacer />
            <View style={styles.innerContainer}>
                <FlatList
                    data={messageData}
                    renderItem={({ item }) => {
                        return (
                            <View
                                key={item.id}
                                style={[styles.card, { width: wp('85%'), }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.cardInner}>
                                        <Text style={[styles.text, { color: Colors.orange }]}>{item.status}</Text>
                                        <Text style={styles.day}>{item.subject}</Text>
                                        <Text style={styles.fadedGray}>{item.code}</Text>
                                    </View>
                                    <View style={styles.smallerView}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.rating}>{item.rating}</Text>
                                            <Entypo name="star" size={15} color={Colors.orange} />
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                // backgroundColor: 'yellow',
                                                width: wp('20%'),
                                                // marginRight:wp('6%')
                                            }}>
                                            <Text style={[styles.rating]}>{item.sessions}</Text>
                                            <Text style={styles.sessions}> sessions</Text>
                                        </View>

                                    </View>
                                </View>
                                <Spacer />
                                {/* <Spacer /> */}
                                <Btn text={Strings.ST55} route={''} width={wp('30')} height={hp('4')} />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Btn text={Strings.ST56} height={48} width={330} route='PickTime' />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: wp('99%'),
        height: hp('80%'),
        alignSelf: 'center',
        // paddingBottom: hp('2%'),
        // backgroundColor: 'red'
    },
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2},
        elevation: 15,
        backgroundColor: Colors.white,
        shadowRadius: 5,
        // backgroundColor:'red',
        alignSelf: 'center',
        borderRadius: 20,
        padding: hp('1.5%'),
        margin: hp('1.3%'),
    },
    cardInner: {
        width: wp('57%'),
        height: hp('5%'),
        // backgroundColor:'red',
    },
    smallerView: {
        width: wp('15%'),
        height: hp('5%'),
        // backgroundColor:'pink',
        // justifyContent:"center",
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        lineHeight: 18,
    },
    day: {
        fontSize: hp('2%'),
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.black,
        // backgroundColor:'red'
    },
    fadedGray: {
        fontSize: hp('1.5%'),
        lineHeight: 18,
        fontWeight: '500',
        color: Colors.fadedgray
    },
    rating: {
        fontWeight: '400',
        fontSize: hp('1.3%'),
        lineHeight: 15,
        color: Colors.orange,
        flexDirection: 'row',

    },
    sessions: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: Colors.fadedgray
    }


})

export default PickClass