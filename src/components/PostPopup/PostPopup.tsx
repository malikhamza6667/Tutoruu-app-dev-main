import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, TextInput ,Alert} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import Avatar from '../Avatar/Avatar';
import Input from '../Input/Input';


import Button from '../Button/Button';
import Switch from '../Switch/Switch';
import Tag from '../Tag/Tag';


interface PostPopupProps {
    opened: boolean;
    post: {
        text: string;
        tags: string[];
        attachment: string;
    };
    onClose: () => void;
    onSubmit: (post: { text: string; tags: string[]; attachment: string }) => void;
}

export const PostPopup: React.FC<PostPopupProps> = ({
    opened,
    post,
    onClose,
    onSubmit,
}) => {
    const [isVisible, setIsVisible] = useState(opened);
    const [text, setText] = useState(post.text);
    const [tags, setTags] = useState(post.tags.join(', '));
    const [attachment, setAttachment] = useState(post.attachment);
    const [email, setEmail] = useState('')
    const handleCloseModal = () => {
        setIsVisible(false);
        onClose();
    };

    const handleSave = () => {
        onSubmit({
            text,
            tags: tags.split(',').map((tag) => tag.trim()),
            attachment,
        });
        setIsVisible(false);
    };

    return (
        <Modal visible={isVisible} transparent={true} animationType="fade">
            <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-gray-500`}>
                <View
                    style={[
                        tw`bg-white py-5 px-2 shadow-lg`,
                        { width: wp('93%'), height: hp('45%'), borderRadius: wp('7%'), },
                    ]}
                >
                    <View style={[tw`flex-row`]}>

                        <Avatar size='small' showCap={false} image={require('../../../assets/dp.jpg')} />

                        <View>

                            <Text
                                style={{ fontFamily: 'PoppinsSemiBold' }}
                            >Yasmine Kamel</Text>
                            <Text
                                style={[tw`text-orange-500`, { fontFamily: 'PoppinsRegular' }]}
                            >@yasmine Kamel</Text>
                        </View>

                    </View>



                    <Input
                        size='Xlarge'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        // title='Password'
                        placeholder='Doe'
                    />

                    <Text
                        style={{ fontFamily: 'PoppinsRegular' }}
                    >Tags</Text>


                    <View
                        style={tw`flex-row`}
                    >

                        <Tag shape='round' type='primary' >AUC</Tag>
                        <Tag shape='round' type='primary' name='caretdown' icon='AntDesign' isPressed={true}>GENERAL</Tag>
                    </View>
                    <View
                        style={tw`flex-row justify-between items-center`} 
                    >

                        <Text
                            style={{ fontFamily: 'PoppinsRegular' }} 
                        >Post anonymously</Text>
                        <Switch opened={true} >

                        </Switch>
                    </View>

                    <Button
                        onPress={() => { alert('Pressed') }}
                        shape='default'
                        text='Post!'
                        width={wp('88%')}
                        height={hp('5%')}
                    />
                    <View style={tw`flex-1`}>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
