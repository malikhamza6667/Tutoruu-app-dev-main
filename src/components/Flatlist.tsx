import React, { useContext } from "react";
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Colors from "../../assets/Colors";
import Heading from "./Heading";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';



const messageData = [
    {
        id: 1,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
    {
        id: 2,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
    {
        id: 3,
        subject: 'CSCE 1520',
        title: 'Introduction to Computer Science'
    },
]


interface Props {
    view: string;
    title?: string
}
const CardList: React.FC<Props> = ({ view, title }) => {
    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {

        const language = contextState.language
        if (language === 'es') {
            Strings = Languages[0].texts

        }
        else if (language === 'en') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={{ width: '70%', height: '100%', alignSelf: 'flex-start' }}>
                    <Text style={styles.subject}> {item.subject} </Text>
                    <Text style={styles.cardText}> {item.title} </Text>
                </View>
                <TouchableOpacity style={{ width: '20%', height: '100%', alignSelf: 'flex-end', justifyContent: "center" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.view2} >{view}</Text>
                        <AntDesign name="arrowright" size={20} color={Colors.orange} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Heading title={title ? title : Strings.ST40} />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={messageData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()} />
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        // marginTop: 40,
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        // height: 112,
        height: hp('13'),
        width: wp('75'),
        shadowRadius: 5,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        alignItems: 'center',
        margin: hp('1'),
        justifyContent: 'center',
        padding: hp('0.8'),
        flexDirection: 'row'
    },
    cardText: {
        fontSize: hp('1.8'),
       fontFamily:'PoppinsRegular',
        lineHeight: 24,
        color: Colors.black,
        // alignSelf: 'stretch'
    },
    subject: {
        fontSize: hp('1.5'),
        fontFamily:'PoppinsMedium',
        lineHeight: 18,
        color: Colors.orange,
        alignSelf: 'flex-start',
    },
    view: {
        width: '15%',
        backgroundColor: 'green',
        height: '100%',
        alignSelf: 'flex-end'
    },
    view2: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.orange,
        marginRight: 10
    }
})

export default CardList