import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../assets/Colors";

const Username: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { marginLeft: '5%' }]}>Hey</Text>
            <Text style={[styles.text, { color: Colors.orange }]}> Ragnar</Text>
            <View style={styles.status} ></View>
            <View style={styles.studentContainer}>
                <Text style={styles.student}>Student</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        width: wp('100%'),
        paddingTop: hp('2.5')
    },
    text: {
        fontSize: hp('3.3'),
        fontFamily: 'PoppinsBold',
        lineHeight: 45,
    },
    student: {
        fontSize: hp('1.6'),
        fontFamily: 'PoppinsRegular',
        lineHeight: 21,
        color: Colors.black,
        opacity: 0.5,
    },
    studentContainer: {
        justifyContent: 'center',
        // marginHorizontal: hp('5%'),
        marginTop: hp('1%')
    },
    status: {
        backgroundColor: Colors.background,
        // backgroundColor: 'red',
        height: hp('1.2'),
        width: wp('2.3'),
        borderRadius: 50,
        marginTop: hp('2.5'),
        marginHorizontal: hp('2')
    }
})

export default Username