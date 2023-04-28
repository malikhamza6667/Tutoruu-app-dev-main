import React from "react";

import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Icon } from "../../components/Icon/Icon";

type Props = {
    children: React.ReactNode,
    userName: string
    isTutor: boolean

}
const Base: React.FC<Props> = ({
    children,
    userName,
    isTutor
}) => {
    return (
        <View style={[tw`flex-1 `, { backgroundColor: Colors.white }]} testID='base-container'>
            <View style={styles.container}>
                <Text
                    
                    style={[tw`text-[30px]`,styles.text, { marginLeft: wp('5%') }]}>Hey</Text>
                <Text
                   
                    style={[tw`text-[30px]`,styles.text, { color: Colors.orange }]}> {userName}</Text>
                <View style={styles.status} ></View>
                <View style={styles.studentContainer}>
                    <Text testID="student-text" style={styles.student}>{isTutor ? 'Tutor' : 'Student'}</Text>
                </View>
            </View>
            {children}
        </View>
    )
}

export default Base

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('10%'),
        paddingTop: hp('3'),

    },
    text: {
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
        marginTop: hp('1'),
        marginHorizontal: hp('2')
    }
})
