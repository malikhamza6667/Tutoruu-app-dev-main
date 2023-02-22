import React from "react";
import {
    TextInput,
    View,
    StyleSheet
} from "react-native";
import Colors from "../../assets/Colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Props{
    navigation:any;
}
const Bar: React.FC<Props> = ({navigation}) => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.input]}>
            <TextInput
                placeholder="Search anything"
                style={{ paddingHorizontal: 5 }}
            />
            <FontAwesome
                name="search" size={20}
                color={Colors.fadedgray}
                style={{ paddingHorizontal: 10 }}
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
        width: '95%',
        alignSelf: 'center',
    },
})
export default Bar