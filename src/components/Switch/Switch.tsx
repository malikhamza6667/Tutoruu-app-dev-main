import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc';

type Props = {
    opened: boolean;
    onPress: () => void;
}

export const Switch: React.FC<Props> = ({ opened, onPress }) => {
    //   const [isOn, setIsOn] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={onPress} testID="switch-button">
                {opened ? (
                    <FontAwesome name="toggle-on" style={tw`text-6xl text-orange-500`} />
                ) : (
                    <FontAwesome name="toggle-off" style={tw`text-6xl text-orange-500`} />
                )}
            </TouchableOpacity>
        </View>
    );
}
