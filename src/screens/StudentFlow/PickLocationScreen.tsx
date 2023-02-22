import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../../assets/Colors";
import Btn from "../../components/Button";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import Languages from '../../languages';
import LanguageContext from '../../languages/languageContext';



const data = [
    {
        id: 1,
        location: 'location 1',
        city: 'city '
    },
    {
        id: 2,
        location: ' other location 2',
        city: 'city '
    },
    {
        id: 3,
        location: ' location 3',
        city: 'city '
    },
    {
        id: 4,
        location: 'location 4',
        city: 'city '
    },
]

const PickLocation: React.FC = () => {
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
    const handleZoomPress = () => {
        setFocused(true);
        setText(true);
    };
    const handleInPersonPress = () => {
        setFocused(false);
        setText(false);
    };
    const [focused, setFocused] = useState(false);
    const [text, setText] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST70} />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <Spacer />
                <Spacer />




                <TouchableOpacity
                    onPress={handleZoomPress}
                    style={focused ? styles.activeCard : styles.card}
                >
                    <Text style={{ color: text ? Colors.orange : Colors.black }}>Zoom</Text>
                </TouchableOpacity>



                <Spacer />


                <Text style={styles.text}>Or</Text>
                <Spacer />





                <TouchableOpacity
                    onPress={handleInPersonPress}
                    style={focused ? styles.card : styles.activeCard}
                >
                    <Text style={{ color: text ? Colors.black : Colors.orange }}>In Person</Text>
                </TouchableOpacity>
                <View style={styles.flatlist}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity style={styles.locationCOntainer}>
                                    <Text style={styles.listText}>{item.location}, </Text>
                                    <Text style={styles.listText}>{item.city}</Text>
                                </TouchableOpacity>

                            )
                        }}

                    />
                </View>





                <View style={{ marginTop: hp('60%') }} >
                    <Btn text={Strings.ST60} width={330} height={48} route={''} />
                </View>
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
        height: hp('90%'),
        alignSelf: 'center',
    },
    locationCOntainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Colors.background,
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('1%'),
        marginHorizontal: wp('1.5%'),
        marginVertical: hp('0.5%'),
        maxWidth: wp('90%'),
    },
    card: {
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: hp('2%'),
        width: wp('80%'),
        height: hp('8%'),
    },
    activeCard: {
        backgroundColor: Colors.lightorange,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: hp('2%'),
        width: wp('80%'),
        height: hp('8%'),
    },
    text: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: hp('2%'),
        lineHeight: 24
    },
    flatlist: {
        width: wp('95%'),
        alignSelf: 'center',
        justifyContent: 'center',
        padding: hp('2%'),
        height: hp('50%'),
    },
    listText: {
        fontSize: hp('1.6%'),
        fontWeight: '500',
        lineHeight: 18,
        color: Colors.black,
        paddingHorizontal: wp('1%'),
    }
})

export default PickLocation