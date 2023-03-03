import React from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";

interface Props {
    icon: any;
}
const Bubble: React.FC<Props> = ({ icon }) => {
    return (
        <View style={styles.bubble}>
            <View>{icon}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        width: wp('8'),
        height: hp('4'),
        backgroundColor: Colors.lightorange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginRight: hp('0.5')
    }
})

export default Bubble