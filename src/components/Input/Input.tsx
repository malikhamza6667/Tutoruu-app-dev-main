import React, { useState } from 'react';
import { TextInput, KeyboardTypeOptions, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Ionicons, FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';







type Props = {
    size?: 'small' | 'medium' | 'large' | 'Xlarge'|'Xsmall'|'xlarge';
    placeholder?: string;
    icon?: string
    iconPosition?: 'right' | 'left'
    onIconPressed?: () => void,
    iconBackground?: string
    value: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
    validations?: [];
    clearable?: boolean;
    autocomplete?: 'on' | 'off';
    disabled?: boolean;
    readonly?: boolean;
    max?: number;
    min?: number;
    step?: number;
    title?: string
    height?: any
    onFocus?: () => void;
    onBlur?: () => void;
    onChangeText: (text: string) => void;
    testID?: string;
    multiline?: boolean
};

const Input: React.FC<Props> = ({
    height,
    title,
    size,
    icon,
    placeholder,
    value,
    type = 'text',
    validations,
    clearable,
    autocomplete,
    disabled,
    readonly,
    testID,
    max,
    min,
    step,
    onFocus,
    onBlur,
    onChangeText,
    iconPosition,
    onIconPressed,
    iconBackground,
    multiline
}) => {
    const [text, setText] = useState(value);
    let keyboardtype = 'default'
    let invisbilePassword = false
    let maxwidth = parseInt(wp(`${max}%`).toString())
    let minWidth = parseInt(wp(`${min}%`).toString())
    let width = wp('75%')
    if (size == 'Xlarge') { width = wp('90%'), height=hp('12%') }
    if (size == 'xlarge') { width = wp('88%') }
    if (size == 'large') { width = wp('80%') }
    if (size == 'medium') { width = wp('55%') }
    if (size == 'small') { width = wp('30%') }
    if (size == 'Xsmall') { width = wp('28%') }



    if (type == 'email') {
        keyboardtype = 'email-address'
    }
    if (type == 'number') {
        keyboardtype = 'numeric'
    }
    if (type == 'password') {
        keyboardtype = 'default'
        invisbilePassword = true
    }
    if (type == 'tel') {
        keyboardtype = 'phone-pad'
    }
    if (type == 'url') {
        keyboardtype = 'url'
    }
    if (type = 'text') {
        keyboardtype = 'default'
    }

    const handleTextChange = (newText: string) => {
        if (validations) {
            // Perform validation logic here
        }
        setText(newText);
        onChangeText(newText);
    };

    let [iconFamily, iconName, Iconsize, color] = icon ? icon.split(' ') : ['', '', '', ''];
    if (icon != undefined) {

        [iconFamily, iconName, Iconsize, color] = icon.split(' ');
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
        <View>
            {/* If there is No Icon In Text Input */}
            {!icon &&

                <View>
                    {title && <Text style={[tw`px-5 py-1 self-start`, { fontFamily: 'PoppinsMedium' }]}>{title}</Text>}

                    <TextInput
                       
                        style={[tw` items-center border border-gray-400 rounded-3xl px-3 py-2`, { fontFamily: 'PoppinsRegular', width: width, height: height }]}
                        placeholder={placeholder}
                        value={text}
                        secureTextEntry={invisbilePassword}
                        keyboardType={keyboardtype as KeyboardTypeOptions}
                        clearButtonMode={clearable ? 'always' : 'never'}
                        autoCompleteType={autocomplete}
                        editable={!disabled && !readonly}
                        multiline={multiline}
                        maxLength={maxwidth ? maxwidth : wp('90%')}
                        minLength={minWidth ? minWidth : wp('30%')}
                        step={step}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChangeText={handleTextChange}
                        testID={testID?testID:'Input'}
                    />
                </View>

            }
            {/* If there is Icon  And Icon Position Is On Left Side*/}
            {
                icon && !iconPosition &&
                <View>
                    {title && <Text style={[tw`px-5 py-1`, { fontFamily: 'PoppinsSemiBold' }]}>{title}</Text>}
                    <View
                        testID='Input'
                        style={[tw`flex-row justify-between items-center border border border-gray-400 px-1 py-2  rounded-3xl `, { width: width, height: hp('5.5%') }]} >

                        <TextInput
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className=' flex-1  px-3'
                            placeholder={placeholder}
                            value={text}
                            secureTextEntry={invisbilePassword}
                            keyboardType={keyboardtype as KeyboardTypeOptions}
                            clearButtonMode={clearable ? 'always' : 'never'}
                            autoCompleteType={autocomplete}
                            editable={!disabled && !readonly}
                            maxLength={maxwidth ? maxwidth : wp('90%')}
                            minLength={minWidth ? minWidth : wp('30%')}
                            step={step}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChangeText={handleTextChange}
                        />
                        <TouchableOpacity
                            className='flex-[0.15]'
                            onPress={onIconPressed}
                            testID='input-icon'
                            style={[tw`rounded-full  justify-center items-center py-1.5  mx-1`, { backgroundColor: iconBackground ? iconBackground : 'transparent' }]}
                        >
                            <IconFamily name={iconName} size={parseInt(Iconsize)} color={color} />

                        </TouchableOpacity>
                    </View>

                </View>


            }
            {
                icon && iconPosition == 'left' &&
                <View>
                    {title && <Text style={[tw`px-5 py-1`, { fontFamily: 'PoppinsSemiBold' }]}>{title}</Text>}
                    <View
                        testID='Input'
                        style={[tw`flex-row  justify-between items-center border border border-gray-400 px-1 rounded-3xl `, { width: width, height: hp('5.5%') }]} >
                        <TouchableOpacity
                            className='flex-[0.15]'
                            onPress={onIconPressed}
                            testID='input-icon'
                            style={[tw`rounded-full justify-center items-center py-1.5 mx-1`, { backgroundColor: iconBackground ? iconBackground : 'transparent' }]}
                        >
                            <IconFamily name={iconName} size={parseInt(Iconsize)} color={color} />

                        </TouchableOpacity>
                        <TextInput
                            style={{ fontFamily: 'PoppinsRegular' }}
                            className=' flex-1  px-3'
                            placeholder={placeholder}
                            value={text}
                            secureTextEntry={invisbilePassword}
                            keyboardType={keyboardtype as KeyboardTypeOptions}
                            clearButtonMode={clearable ? 'always' : 'never'}
                            autoCompleteType={autocomplete}
                            editable={!disabled && !readonly}
                            maxLength={maxwidth ? maxwidth : wp('90%')}
                            minLength={minWidth ? minWidth : wp('30%')}
                            step={step}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChangeText={handleTextChange}
                        />
                    </View>

                </View>


            }
            {/* If there is Icon  And Icon Position Is On Right  Side*/}
            {
                icon && iconPosition == 'right' &&
                <View>
                    {title && <Text style={[tw`px-5 py-1`, { fontFamily: 'PoppinsSemiBold' }]}>{title}</Text>}
                    <View
                        testID='Input'
                        style={[tw`flex-row justify-between items-center py-2 border border border-gray-400 rounded-3xl `, { width: width, height: hp('6%') }]}
                    >

                        <TextInput
                            className=' flex-1  px-3'
                            style={{ fontFamily: 'PoppinsRegular' }}
                            placeholder={placeholder}
                            value={text}
                            secureTextEntry={invisbilePassword}
                            keyboardType={keyboardtype as KeyboardTypeOptions}
                            clearButtonMode={clearable ? 'always' : 'never'}
                            autoCompleteType={autocomplete}
                            editable={!disabled && !readonly}
                            maxLength={maxwidth ? maxwidth : wp('90%')}
                            minLength={minWidth ? minWidth : wp('30%')}
                            step={step}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChangeText={handleTextChange}
                        />

                        <TouchableOpacity
                            className='flex-[0.15]'
                            onPress={onIconPressed}
                            testID='input-icon'
                            style={[tw`rounded-full justify-center items-center h-10 mx-1`, { backgroundColor: iconBackground ? iconBackground : 'transparent' }]}
                        >
                            <IconFamily

                                name={iconName} size={parseInt(Iconsize)} color={color} />

                        </TouchableOpacity>
                    </View>
                </View>
            }

        </View>
    );
};



export default Input;