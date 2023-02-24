import React from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../assets/Colors";

const Divider: React.FC = () => {
    return (
        <View style={styles.divider}></View>
    )
}
const styles = StyleSheet.create({
    divider: {
        width: wp('100%'),
        height: hp('0.2%'),
        backgroundColor: Colors.background,
    }
})
export default Divider