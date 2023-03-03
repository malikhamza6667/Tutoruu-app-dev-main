import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
    text: string;
}

const Box: React.FC<Props> = ({ text }) => {
    return (
        <View style={styles.box}>
            <View style={{
                width: wp('12%'),
                // alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'pink',
                marginTop: hp('1.2')


            }}
            >
                <Feather
                    name="gift"
                    size={20}
                    color={Colors.fadedgray}
                />
            </View>
            <View
                style={{
                    width: wp('60%'),
                    // backgroundColor:'pink',
                    alignSelf: 'flex-start'
                    // alignSelf: 'center',
                    // justifyContent: 'center'
                }}
            >
                <Text style={styles.text}>{text}</Text>
            </View>
            <TouchableOpacity
                style={{
                    width: wp('20%'),
                    // alignSelf: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('1.2')
                }}
            >
                <AntDesign
                    name="arrowright"
                    size={20}
                    color={Colors.orange}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: wp('95%'),
        height: hp('8'),
        borderRadius: 4,
        backgroundColor: Colors.background,
        alignSelf: 'center',
        flexDirection: 'row',
        // alignItems: 'center',
        alignItems: 'flex-start',
        paddingVertical: hp('1'),
        // justifyContent: 'center',
        borderWidth: 0.2,
        // borderColor:Colors.black,
        borderColor: 'rgba(0, 0, 0, 0.4)'


    },
    text: {
        fontSize: hp('1.3'),
        fontFamily: 'PoppinsRegular',
        lineHeight: 15,
        opacity: 0.5,
    }
})

export default Box