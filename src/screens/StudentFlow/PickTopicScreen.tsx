import React, { useContext, useState } from "react"
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from "../../../assets/Colors"
import Btn from "../../components/Button"
import Header from "../../components/Header"
import Spacer from "../../components/Spacer"
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
const messageData = [
    {
        id: 1,
        status: 'online',
        subject: 'Financial Management',
        code: 'FIN201',
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20',
        topic: 'General Explanation'
    },
    {
        id: 2,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20',
        topic: 'Exam Revision'
    },
    {
        id: 3,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20',
        topic: 'Assignments'
    },
    {
        id: 4,
        status: 'online',
        subject: 'Financial Management',
        code: "FIN201",
        rating: '4.74',
        sessions: '13',
        slots: '10',
        day: 'Sunday',
        date: 'November 20',
        topic: 'Essays'
    },
]

interface Props{
    id: number;
    status: string;
    subject: string;
    code: string;
    rating: string;
    sessions: string;
    slots: string;
    day: string;
    date: string;
    topic: string;
}
const PickTopic: React.FC<Props> = () => {
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

    const [focused, setFocused] = useState()

    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST59} />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <View style={styles.view}>
                    <Text style={styles.text}>{Strings.ST69}</Text>
                </View>

                <FlatList
                    data={messageData}
                    renderItem={({ item }) => {
                        const background = item.id === focused ? styles.activeCard : styles.card;
                        const text = item.id === focused ? Colors.orange : Colors.black;
                        return (
                            <TouchableOpacity
                                onPress={() => setFocused(item.id)}
                                key={item.id}
                                style={item.id === focused ? styles.activeCard : styles.card}>
                                <Text style={[styles.slots, { color: text }]}>{item.topic}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Btn text={Strings.ST56} height={48} width={330} route='PickLocation' />
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
        height: hp('85%'),
        alignSelf: 'center',
        paddingBottom: hp('2%')
    },
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
        // backgroundColor:'pink',
        padding: wp('4%')
    },
    activeCard: {
        backgroundColor: Colors.lightorange,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: wp('4%'),
        margin: 10,
        width: wp('90%'),
        height: hp('8%'),
    },
    topic: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    text: {
        fontSize: hp('2%'),
        fontWeight: '500',
        lineHeight: 24
    },
    view: {
        // backgroundColor: 'pink',
        width: wp('90%'),
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp('1%')
    },
    slots: {
        fontWeight: '400',
        fontSize: hp('2%'),
        lineHeight: 24
    }
})

export default PickTopic