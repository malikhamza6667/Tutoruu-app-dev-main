import React, { useContext } from "react";
import { Text, View, Image, ScrollView, SectionList, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from "../../components/Header";
import Colors from '../../../assets/Colors';

import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';
const sections = [
    {
        title: 'Today',
        data: [
            {
                key: 'item1',
                msg: 'Victoria Hanson mentioned you in a comment ',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
    {
        title: 'Yesterday',
        data: [
            {
                key: 'item2',
                msg: 'Victoria Hanson mentioned you in a comment',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
    {
        title: 'Last Week',
        data: [
            {
                key: 'item3',
                msg: 'Victoria Hanson mentioned you in a comment',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
];

const renderItem = ({ item }: { item: { key: string } }) => (
    <View style={item.key === 'item1' ? styles.card1 : styles.card2}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={item.key === 'item1' ? styles.msg1 : styles.msg2}>{item.msg}</Text>
        <Text style={styles.time}>{item.time}</Text>
    </View>
);

const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View >
        <Text style={styles.title}>{section.title}</Text>
    </View>
);


const Notification: React.FC = () => {
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

            <Header headerTitle={Strings.ST24} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.innerContainer}>
                    <SectionList
                        sections={sections}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                    />
                </View>
            </ScrollView>
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
        justifyContent: 'center',
        margin: wp('2%')
    },
    title: {
        fontSize: hp('1.8%'),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 24,
        color: Colors.black,
        margin: wp('2%')
    },
    time: {
        fontSize: hp('1.3%'),
        fontWeight: '300',
        lineHeight: 15,
        color: Colors.black,
        fontStyle: 'normal',
        alignSelf: 'center',
        marginRight: hp('2%'),
        marginLeft: hp('1%'),
    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightorange,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: 3
    },
    card2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingVertical: hp('1%'),
        // paddingHorizontal: hp('1')
    },
    msg1: {
        fontSize: hp('1.4'),
        fontWeight: '500',
        lineHeight: 18,
        fontStyle: 'normal',
        alignSelf: 'center',
        color: Colors.orange,
        // backgroundColor:'red',
        width: wp('60%')
    },
    msg2: {
        fontSize: hp('1.4'),
        fontWeight: '500',
        lineHeight: 18,
        fontStyle: 'normal',
        alignSelf: 'center',
        color: Colors.black,
        width: wp('60%')
    },
    avatar: {
        width: wp('15%'),
        height: hp('7%'),
        borderRadius: 50,
        marginRight: wp('1'),
        marginLeft: wp('1'),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
})

export default Notification