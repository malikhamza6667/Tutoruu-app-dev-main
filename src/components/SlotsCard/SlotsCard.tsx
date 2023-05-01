import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Card } from "../../layouts/Card/Card";

type Slots={
    date: string,
    available_times:number[]
}
type Props = { 
    slots: Slots
    id?: any
  isFocused:boolean
   
}

// [{ date: '2020-01-01', available_times: [12, 13, 14] }]
const SlotsCard: React.FC<Props> = ({ id, slots,isFocused }) => {
    const num_of_slots = slots.available_times.length
    const date = slots.date
   
   
    return (
       <Card>
<View

style={[tw`items-center py-4 rounded-2xl`,{backgroundColor:isFocused? Colors.lightorange:Colors.white}]}>

           <Text style={[tw`text-sm text-center`, { color: Colors.orange, fontFamily: 'PoppinsRegular', }]}> {num_of_slots} Slots</Text>
           <Text style={[tw`text-base`, { color:isFocused?Colors.orange: Colors.black, fontFamily: 'PoppinsMedium' }]}>{date}</Text>
</View>
       </Card>
    
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

export default SlotsCard