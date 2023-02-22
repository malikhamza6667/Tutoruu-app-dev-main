import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";


interface Props {

    width: number;
    borderRadius: number;
    height: number;

}
const Field: React.FC<Props> = ({ borderRadius, width, height }) => {
    return (
        <View>
            <TextInput
                placeholder="Doe.."
                placeholderTextColor={Colors.black}
                style={[styles.input, { borderRadius, width, height }]} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.gray,
        padding: hp('1%'),
        margin: hp('1')
    },
})


export default Field