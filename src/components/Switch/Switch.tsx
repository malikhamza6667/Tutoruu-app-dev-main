import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc';

interface SwitchProps {
    opened: boolean;
    onToggle?: (opened: boolean) => void;
    children?: React.ReactNode;
}

const Switch: React.FC<SwitchProps> = ({ opened,  children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(opened);

    const handleClick = () => {
        // console.log('opened is',opened)
        const newOpen = !isOpen;
        setIsOpen(newOpen);
        console.log('opened is',newOpen)

       
    };

    return (
        <TouchableOpacity onPress={handleClick} testID="switch-button">
            {isOpen ? (
                <FontAwesome name="toggle-on" style={tw`text-6xl text-orange-500`} />
            ) : (
                <FontAwesome name="toggle-off" style={tw`text-6xl text-orange-500`} />
            )}
            <Text testID='switch-label'>{children}</Text>
        </TouchableOpacity>
    );
};
export default Switch;
