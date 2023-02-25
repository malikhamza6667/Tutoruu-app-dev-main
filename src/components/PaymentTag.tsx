import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";

interface Props {
    text: string;
}
const PaymentTag: React.FC<Props> = ({ text }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.container}>
                <Text style={styles.text}> {text} </Text>
            </View>
            <Text style={styles.time}>2:30 PM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightorange,
        height: hp('2.3%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: hp('1.3%'),
        lineHeight: 15,
        color: Colors.orange
    },
    time: {
        fontFamily: 'PoppinsRegular',
        fontSize: hp('1.8%'),
        lineHeight: 21,
    }
})

export default PaymentTag