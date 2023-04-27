import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

import Details from "../../layouts/Details/Details";
import { Card } from "../../layouts/Card/Card";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";
import Colors from "../../../assets/Colors";

const data = [
    {
        id: 1,
        topic: 'Exam Revisions'
    },
    {
        id: 2,
        topic: 'Assignments'
    },

]
type Props={
    navigation?:any
}
const TopicSelection:React.FC<Props> = ({navigation}) => {
    const [focused, setFocused] = useState(0)
    return (
        <Details headerTitle="Pick A Topic">
            <HorizontalList
                horizontal={false}
                data={data}
                renderItem={({ item }) => {
                    const background = item.id === focused ? styles.activeCard : styles.card;
                    const text = item.id === focused ? Colors.orange : Colors.black;
                    return (

                        <TouchableOpacity
                            onPress={() =>{ setFocused(item.id)
                            navigation.navigate('TimeSelection')
                            }}
                            key={item.id}
                            style={item.id === focused ? styles.activeCard : styles.card}
                        >
                            <Text style={[styles.slots, { color: text }]}>{item.topic}</Text>
                        </TouchableOpacity>

                    )
                }}
            />


        </Details>
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


export default TopicSelection