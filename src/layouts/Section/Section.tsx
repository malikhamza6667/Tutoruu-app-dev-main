import React from "react";


import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import Button from "../../components/Button/Button";

// <Section title='Classes' description='These are your enrolled classes.' button={{ shape: 'round', icon: 'plus', className: 'bg-secondary text-primary' }}>
// 	// inner content
// </Section>

type Button = {
    shape: string
    icon: string
    className: string
    iconFamily: string
}

type Props = {
    title: string
    pressableSubtitle?: string
    description?: string
    button?: Button
    children: React.ReactNode
    onPressSubtitle?: () => void
    onPressButton?:() => void

}
const Section: React.FC<Props> = ({
    title,
    pressableSubtitle,
    description,
    onPressButton,
    button,
    onPressSubtitle,
    children }) => {
        const colors=  button?.className.split(' ')
      
    return (
        <View >
<View style={[tw`flex-row justify-between px-3 py-1`]}>
            <Text style={[tw`px-6 py-2 text-base`, { fontFamily: 'PoppinsMedium' }]}>{title}</Text>
            {
                button && onPressButton &&
                <Button
                shape={button.shape=='round'?'round' : button.shape=='default'?'default':button.shape=='full'?'full':'ghost'}
                onPress={onPressButton}
                backgroundColor={colors &&colors[0]}
                roundButtonPadding="px-0.5"
                icon={`${button.iconFamily} ${button.icon} 24 ${colors &&colors[1]}`}
                
/>
            }

</View>

{description && <View>
<Text style={[tw`px-8 py-2 text-sm`, { fontFamily: 'PoppinsRegular' }]}>{description}</Text>
</View>}
            <View>
                {children}
            </View>
            {pressableSubtitle && <TouchableOpacity
                onPress={onPressSubtitle}
            >
                <Text style={[tw`px-6 py-2  text-sm self-center`, { fontFamily: 'PoppinsBold', color: Colors.orange }]}>{pressableSubtitle}</Text>

            </TouchableOpacity>}
        </View>
    )
}

export default Section