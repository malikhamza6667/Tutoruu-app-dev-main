import React, { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PopupProps {
    opened: boolean;
    children: React.ReactNode;
    closeModal: () => void;
}

export const Popup: React.FC<PopupProps> = ({ opened, closeModal, children }) => {
    const [isVisible, setIsVisible] = useState(opened);

    const handleCloseModal = () => {
        setIsVisible(false);
        closeModal();
    };

    return (
        <Modal visible={isVisible} transparent={true} animationType="fade">
            <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-gray-500`}>
                <View
                    style={[
                        tw`bg-white p-20 shadow-lg`,
                        { width: wp('90%'), height: hp('35%'), borderRadius: wp('7%') }
                    ]}
                >
                    <TouchableOpacity style={tw`absolute top-0 right-0 p-4`} onPress={handleCloseModal} testID="close-button">
                        <Icon name="times" size={20} />
                    </TouchableOpacity>
                    {children}
                </View>
            </View>
        </Modal>
    );
};
