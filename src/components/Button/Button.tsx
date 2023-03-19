import React, { useEffect } from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "./../../../assets/Colors";
import tw from 'twrnc';
import { AntDesign, Ionicons, FontAwesome, Entypo,MaterialCommunityIcons,FontAwesome5, MaterialIcons } from '@expo/vector-icons';

type ButtonProps = {
    shape: 'default' | 'ghost' | 'round' | 'full',
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
    let buttonStyles = 'h-13 w-48 bg-orange-400';

    let textStyles = 'text-sm'

    if (props.shape == 'ghost') {
        buttonStyles = 'h-13 w-48 bg-transparent '
    }
    if (props.shape == 'full') {
        buttonStyles = 'h-13  w-full flex-row   rounded-full py-3 px-5 items-center'
    }
    if (props.shape == 'default') {
        buttonStyles = 'h-13 w-44 flex-row items-center self-center   rounded-full'
    }
    if (props.shape == 'round') {
        buttonStyles = 'self-center justify-center  rounded-full items-center'
    }



    return (
        <View>
            {/* // To Check The Button's Shape Is Round Or Not Since Round Shaped Button Takes An Icon Only if it take any other prop use conditions to use only one at time else prefer default or full */}
 {    props.shape =='round'    ?  
 
// If The Button's Shape Is Round
 <TouchableOpacity
            disabled={props.disabled}
            testID="button"
            style={[tw`${buttonStyles}`, {
               
                height: props.height ? props.height : hp('8%'),
                width: props.width ? props.width : wp('16%'),
                elevation: 3,
                backgroundColor: props.disabled ? Colors.neutralShadow : props.backgroundColor ? props.backgroundColor : Colors.orange,


            }]}
            onPress={props.onPress}
        >
             <IconFamily name={iconName} size={parseInt(size)} color={color} /> 

        </TouchableOpacity>


:
// If The Button's Shape Is Not Round
        <TouchableOpacity
            disabled={props.disabled}
            testID="button"
            style={[tw`${buttonStyles}`, {
                justifyContent: 'space-between',
                height: props.height ? props.height : hp('6%'),
                width: props.width ? props.width : wp('85%'),
                elevation: 3,
                backgroundColor: props.disabled ? Colors.neutralShadow : props.backgroundColor ? props.backgroundColor : Colors.orange,


            }]}
            onPress={props.onPress}
        >
{/* For Showing Only Text */}
            {
             !props.image && !props.icon && props.text !=''&&
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white, alignSelf: 'center' }]}>{props.text}</Text>
                </View>
            }
{/* For Showing Image On The Right Side */}
            {
                props.imagePosition == 'right' ?
                    props.image &&
                    <View style={[tw`flex-row px-2 mx-2 items-center  justify-center`,]}>
                        <View className="flex-[0.85]"
                            style={[tw`items-center justify-center  self-center h-8 `]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        <View className="flex-[0.15]  items-center justify-center ">

                            <Image

                                source={{ uri: props.image }}
                                resizeMode='contain'
                                style={[tw`rounded-full h-8 w-8`]}
                            // className=' '
                            />
                        </View>
                    </View>
                    :
            // For Showing Image On Left
                    props.image &&
                    <View style={tw`flex-row items-center px-2 mx-2 justify-evenly`}>

                        <View className="flex-[0.15]  justify-center">

                            <Image

                                source={{ uri: props.image }}
                                resizeMode='contain'
                                fadeDuration={0}
                                style={[tw`rounded-full h-7 w-7`]}
                            // className=' '
                            />
                        </View>
                        <View
                            className="flex-[0.85]"
                            style={[tw`items-center  justify-center self-center h-8 `]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                    </View>


            }
{/* For Showing Icon On Right */}
            {
                props.iconPosition == 'right' ?
                    props.icon &&
                    <View style={[tw`flex-row px-2  mx-2 items-center  justify-center`,]}>
                       {props.text !='' && <View className="flex-[0.75] "
                            style={[tw`items-center justify-center self-center h-8 `]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                        <View  style={[tw`items-center  justify-center`,{flex:0.25}]}>
                        <IconFamily name={iconName} size={parseInt(size)} color={color} /> 
                        </View>
                    </View>
                    :
                    // For Showing Icon On Left
                    props.icon &&
                    <View style={tw`flex-row items-center  px-2 mx-2 justify-evenly`}>

                        <View style={[tw`px-1 self-center  justify-center `,{flex:props.text?0.2:1}]}>

                            <IconFamily name={iconName} size={parseInt(size)} color={color} />

                

                        </View>
                        {props.text && <View className="flex-[0.85] "
                            style={[tw`items-center justify-center  self-center h-8 `]}>
                            <Text style={[tw`${textStyles}`, { fontFamily: 'PoppinsBold', color: props.textColor ? props.textColor : Colors.white }]}>{props.text}</Text>
                        </View>
                        }
                    </View>


            }
        </TouchableOpacity>
        
        }
        </View>
    )
}





export default Button;