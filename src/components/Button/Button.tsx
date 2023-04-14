import React from "react";
import {
    TouchableOpacity,
    Text,
    Image,
    View,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Colors from "./../../../assets/Colors";
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


type ButtonProps = {
    shape: 'default' | 'ghost' | 'round' | 'full'|'medium',
    icon?: string,
    iconPosition?: 'left' | 'right',
    text?: string,
    disabled?: boolean,
    onPress: () => void
    backgroundColor?: string
    height?: any,
    width?: any,
    image?: string,
    textColor?: string,
    imagePosition?: 'left' | 'right'
    testID?: string
}


const Button: React.FC<ButtonProps> = (props) => {
    let [iconFamily, iconName, size, color] = props.icon ? props.icon.split(' ') : ['', '', '', ''];
    if (props.icon != undefined) {

        [iconFamily, iconName, size, color] = props.icon.split(' ');
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
    let iconButtonStylesFull = 'flex-row items-center flex-1 justify-center '
    let iconButtonStylesDefault = 'flex-row items-center justify-center '
    let buttonStyles = 'h-13 w-48 bg-orange-400';
    let textStyles = 'text-sm'
    if (props.shape == 'ghost') {
        buttonStyles = 'h-13 w-48 bg-transparent '
    }
    if (props.shape == 'full') {
        buttonStyles = 'py-2 h-13 w-full flex-row  justify-evenly rounded-full py-4 px-6 items-center'
    }
    if (props.shape == 'default') {
        buttonStyles = 'px-5 py-2 flex-row items-center self-center  rounded-full'
    }
    if (props.shape == 'round') {
        buttonStyles = 'self-center px-3 py-3 justify-center  rounded-full items-center'
    }
    if (props.shape == 'medium') {
        buttonStyles = 'py-1 h-12 w-full flex-row  justify-evenly rounded-full px-6 items-center'
    }
    return (
        <TouchableOpacity
            disabled={props.disabled}
            testID={props.testID ? props.testID : 'button'}
            onPress={props.onPress}
            className={buttonStyles}
            style={[{ backgroundColor: props.disabled ? Colors.neutralShadow : props.backgroundColor ? props.backgroundColor : Colors.orange, elevation: 5 }]}
        >

            {/* For Showing Only The Text */}
            {
                !props.image && !props.icon && props.text != '' &&
                props.shape != 'round' &&
                <Text
                    className={textStyles}
                    style={[{ fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white, alignSelf: 'center' }]}>{props.text}</Text>
            }

            {/* For Round Button  Round Button Takes Only Icon*/}

            {
                props.shape == 'round' &&
                <IconFamily name={iconName} size={parseInt(size)} color={color} />

            }

            {/*  Icon On The Right */}

            {
                props.iconPosition == 'right' ?
                    props.shape != 'round' &&
                    props.icon &&
                    <View style={[props.shape == 'default' ? tw`${iconButtonStylesDefault}` : tw`${iconButtonStylesFull}`,]}>
                        {props.text != '' && <View
                            style={props.shape == 'default' ? [tw`items-center justify-center self-center mx-3`] : [tw`items-center justify-center self-center`, { flex: 1 }]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                        <View testID="icon" style={[tw`items-center  justify-center`,]}>
                            <IconFamily name={iconName} size={parseInt(size)} color={color} />
                        </View>
                    </View>
                    :
                    // Icon On The Left
                    props.icon && props.shape != 'round' &&
                    <View style={[props.shape == 'default' ? tw`${iconButtonStylesDefault}` : tw`${iconButtonStylesFull}`,]}>
                        <View testID="icon" style={[tw` self-center  justify-center `]}>
                            <IconFamily name={iconName} size={parseInt(size)} color={color} />
                        </View>
                        {props.text && <View style={props.shape == 'default' ? [tw`items-center justify-center self-center mx-3`] : [tw`items-center justify-center self-center`, { flex: 1 }]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                    </View>
            }

            {/*  Image On The Right */}

            {
                props.imagePosition == 'right' ?
                    props.shape != 'round' &&
                    props.image &&
                    <View
                        style={[props.shape == 'default' ? tw`${iconButtonStylesDefault}` : tw`${iconButtonStylesFull}`,]}>
                        {props.text != '' && <View
                            style={props.shape == 'default' ? [tw`items-center justify-center self-center mx-3`] : [tw`items-center justify-center self-center`, { flex: 1 }]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                        <View style={[tw`items-center  justify-center`,]}>
                            <Image
                                testID="image"
                                source={{ uri: props.image }}
                                resizeMode='contain'
                                style={[tw`rounded-full h-8 w-8`]}

                            />
                        </View>
                    </View>
                    :
                    // Image On The Left
                    props.image && props.shape != 'round' &&
                    <View style={[props.shape == 'default' ? tw`${iconButtonStylesDefault}` : tw`${iconButtonStylesFull}`,]}>
                        <View style={[tw` self-center  justify-center `]}>
                            <Image
                                testID="image"
                                source={{ uri: props.image }}
                                resizeMode='contain'
                                style={[tw`rounded-full h-8 w-8`]}

                            />
                        </View>
                        {props.text && <View
                            style={props.shape == 'default' ? [tw`items-center justify-center self-center mx-3`] : [tw`items-center justify-center self-center`, { flex: 1 }]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                    </View>
            }



        </TouchableOpacity>


    )
}

export default Button







