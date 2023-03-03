import React from "react";
import {
    TextInput,
    View,
    StyleSheet
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/Colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Props{
    // navigation:any;
}
const Bar: React.FC<Props> = () => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.input]}>
            <TextInput
                placeholder="Search anything"
                style={{ paddingHorizontal: hp('1') }}
            />
            <FontAwesome
                name="search" size={20}
                color={Colors.fadedgray}
                style={{ paddingHorizontal: hp('1') }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.gray,
        padding: 10,
        width: wp('90%'),
        alignSelf: 'center',
    },
})
export default Bar