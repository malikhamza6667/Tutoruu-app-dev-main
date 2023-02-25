import React from "react";
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";

interface Props {
    paragraphText: string;
}
const Paragraph: React.FC<Props> = ({ paragraphText }) => {
    return (
        <Text style={styles.paragraph} >{paragraphText} </Text>
    )
}
const styles = StyleSheet.create({
    paragraph: {
        color: Colors.black,
        fontWeight: '400',
        fontSize: hp('1.7'),
        textAlign: 'center',
        lineHeight: 21,
        fontStyle: 'normal',
        // backgroundColor:'red',
        width:wp('70%')
    },
})

export default Paragraph