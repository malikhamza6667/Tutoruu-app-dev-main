import React, { useState, useContext } from 'react'
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, FlatList, KeyboardAvoidingView } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { Classes, TutorSubjects } from '../DummyData';


import { FontAwesome } from '@expo/vector-icons';
import LanguageContext from '../../../languages/languageContext';
import Languages from '../../../languages';
import Colors from '../../../../assets/Colors';
import Username from '../../../components/UserName';
import Spacer from '../../../components/Spacer';
import TutorCard from '../../../components/TutorCard';
import Divider from '../../../components/Divider';
import { ScrollView } from 'react-native-virtualized-view';

const sessions = [
    {
        id: 0,
        type: 'online',
        status: 'awaiting comfirmation',
        time: "2.30 PM",
        day: 'Monday',
        title: 'Macro Economics 135'
    }
]
interface Props {
    navigation: any
}
const MarketPlace: React.FC<Props> = ({ navigation }) => {
    const contextState = useContext(LanguageContext);

    let Strings: any = {}
    if (contextState != null) {

        const language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
        else if (language === 'es') {
            Strings = Languages[1].texts
        }
        else {
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    const [classes, setClasses] = useState(Classes)
    const [backgroundEnabled, setBackgroundEnabled] = useState(0)
    const [newClass, setNewClass] = useState('')
    return (
        <SafeAreaView className='justify-center flex-1'>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    // className='flex-1 bg-white justify-evenly'
                    style={{
                        backgroundColor: Colors.white
                    }}
                >
                    <KeyboardAvoidingView behavior='height'>
                       
                        <Spacer />
                        <Username />
                        <Divider />
                        <Spacer />

                        <View className='flex-row justify-between items-center gap-x-4  m-4 my-1  p-2 rounded-full border border-gray-300'>

                            <TextInput
                                style={{ fontFamily: 'PoppinsMedium' }}
                                className=' flex-1'
                                placeholder='Add Classes'
                                placeholderTextColor={Colors.gray}
                                value={newClass}
                                onChangeText={(text) => { setNewClass(text) }}
                            />
                            <TouchableOpacity
                                onPress={() => { alert(newClass) }}
                            >

                                <FontAwesome name="plus" size={hp('2.5')} color={Colors.gray}
                                    style={{
                                        marginRight: wp('2')
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                // backgroundColor: 'pink'
                            }}
                        >
                            <FlatList
                                data={classes}
                                horizontal
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => { setBackgroundEnabled(index) }}
                                            style={{ backgroundColor: backgroundEnabled == index ? Colors.lightorange : Colors.background, marginLeft: hp('2'), marginVertical: hp('1') }}
                                            className=' rounded-full py-2 px-3 items-center   '>
                                            <Text
                                                style={{
                                                    fontFamily: 'PoppinsMedium',
                                                    color: backgroundEnabled == index ? Colors.orange : Colors.black,
                                                   textTransform:'uppercase'
                                                   
                                                }}
                                            className='text-xs'
                                            >
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={(item: { id: { toString: () => any } }) => { return item.id.toString() }}
                            />

                        </View>
                        <View
                            // className='mx-3 '
                            style={{
                                // shadowColor: 'gray',
                                // shadowOpacity: 0.3,
                                // shadowOffset: { width: 2, height: 5 },
                                // elevation: 2,
                                // borderWidth: 1,
                                // height: hp('20%'),
                                // width: wp('98%'),
                                // alignSelf: 'center'

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'PoppinsMedium',
                                
                                }}
                                className='m-2 mx-5 text-center text-base self-start'>{Strings.ST80}</Text>
                            <View
                                className="rounded-2xl py-1 px-4 m-2 "
                                style={{
                                    backgroundColor: Colors.white,
                                  
                                   
                                   
                                    shadowColor: 'gray',
                                    shadowOpacity: 0.4,
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 5,
                                    elevation: 10,
                                }}
                            >
                                <View
                                    style={{
                                        // position: 'absolute',
                                        // top: 0,
                                        // left: 0,
                                        // right: 0,
                                        // height: 5,
                                        // shadowColor: 'black',
                                        // shadowOpacity: 0.2,
                                        // shadowOffset: { width: 0, height: -5 },
                                        // elevation: 5,
                                    }}
                                >
                                    <View
                                   
                                    >


                                        <FlatList
                                            data={sessions}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View
                                                    // className='  p-4 '
                                                    >
                                                        {/* <Spacer/> */}
                                                        <View
                                                            className='flex-row items-center justify-between'
                                                            style={{
                                                                // borderWidth: 1
                                                            }}
                                                        >

                                                            <View
                                                                style={{
                                                                    backgroundColor: Colors.lightorange,
                                                                    borderRadius: 5,
                                                                    marginTop: hp('1')
                                                                }}
                                                            >

                                                                <Text
                                                                    style={{
                                                                        color: Colors.orange,
                                                                        textTransform: 'uppercase',
                                                                        fontFamily: 'PoppinsMedium',
                                                                        // borderRightColor: 'pink',
                                                                        // borderWidth:1
                                                                    }}
                                                                    className='p-1' >{item.status}</Text>
                                                            </View>
                                                            <Text
                                                                style={{ fontFamily: 'PoppinsMedium' }}
                                                                className='text-sm  text-justify  w-auto' >{item.time}</Text>
                                                        </View>
                                                        <Text
                                                            style={{ color: Colors.orange, fontFamily: 'PoppinsRegular' }}
                                                            className=' text-sm text-justify '>{item.type}</Text>
                                                        <Text
                                                            style={{ fontFamily: 'PoppinsRegular' }}
                                                            className='text-base  font-normal text-justify '>{item.day}</Text>
                                                        <Text
                                                            style={{ fontFamily: 'PoppinsRegular' }}
                                                            className='text-sm text-justify '>{item.title}</Text>
                                                        <Spacer />
                                                    </View>
                                                )
                                            }}
                                            keyExtractor={item => { return item.id.toString() }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity className='self-center items-center my-1 p-2'>
                            <Text
                                style={{
                                    color: Colors.orange,
                                    fontFamily: 'PoppinsBold',
                                    // backgroundColor:'pink',
                                    fontSize: hp('1.5'),
                                  
                                    lineHeight: 21

                                }}
                                className='text-sm'>{Strings.ST81}</Text>
                        </TouchableOpacity>
                        <View className='mx-1 mt-1 mb-2 justify-center' >
                            <Text
                                style={{
                                    fontFamily: 'PoppinsBold',
                                    // fontSize: hp('1.8'),
                                    fontSize: 16,
                                    // fontWeight: 'bold',
                                    // lineHeight: 24,
                                    // backgroundColor: 'pink'
                                }}
                                className=' text-center mx-3 self-start'>{Strings.ST83}</Text>
                            <TutorCard
                                image='dp'
                                data={TutorSubjects}
                                name='Youssef Harron'
                                sessions='4'
                                text='PhD student in the Industrial & Systems Engineering Department…'
                                key={'hamza'}
                            />
                        </View>
                        <Spacer />
                        <Spacer />
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}
export default MarketPlace;