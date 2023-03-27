import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import {
    AntDesign,
    Ionicons,
    FontAwesome,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5,
    MaterialIcons
} from '@expo/vector-icons';
import Colors from "../../../assets/Colors";

type Props = {
    text: string;
    icon: string;
    // link: string;
}
const ActionLink: React.FC<Props> = (props) => {
    let [iconFamily, icon,] = props.icon ? props.icon.split(' ') : ['', ''];
    if (props.icon != undefined) {

        [iconFamily, icon,] = props.icon.split(' ');
    }
    const IconFamily = {
        AntDesign,
        FontAwesome,
        Ionicons,
        Entypo,
        MaterialCommunityIcons,
        MaterialIcons,
        FontAwesome5
    }[iconFamily];
    return (
        <TouchableOpacity
            testID="touchable-opacity"
            style={[
                tw`flex-row items-center justify-between p-4 py-5`, { backgroundColor: Colors.background }
            ]}
        >
            <IconFamily
                name={icon}
                size={hp('2.5')}
                color={Colors.black}

            />
            <Text
                style={[
                    tw`w-40`, { fontFamily: 'PoppinsMedium', flex: '0.9' }
                ]}
            >{props.text}</Text>
            <Entypo
                name='chevron-right'
                size={hp('2.5')}
                color={Colors.black}
            />
        </TouchableOpacity>

    )
}

export default ActionLink