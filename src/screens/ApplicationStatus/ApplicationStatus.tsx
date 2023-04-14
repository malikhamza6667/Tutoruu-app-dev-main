import React from "react";

import { View, Text, Image } from "react-native";
import Details from "../../layouts/Details/Details";
import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import { Card } from "../../layouts/Card/Card";
type Props={
    navigation: any
}
const ApplicationStatus:React.FC <Props>= ({navigation}) => {

    const status = false
    return (
        <Details headerTitle="Application Status">
            {status ?
                <View style={[tw`flex-1 justify-center items-center`]}>
                    <Image
                        source={require('./../../../assets/payment.jpg')}
                        style={{ height: hp('10%'), width: wp('20%') }}
                        resizeMode="contain"
                    />
                    <Text

                        style={[tw`text-xl  p-2`, { fontFamily: 'PoppinsBold', color: Colors.orange }]}>Tutor Accepted!</Text>
                    <Text

                        style={[tw`text-sm  p-2`, { fontFamily: 'PoppinsRegular', textAlign: 'center' }]}>Head to your new tutor dashboard and start teaching</Text>

                    <Button
                        shape="default"
                        onPress={() => { alert('Pressed') }}
                        text="Take Me There"

                    />
                </View>

                :
                <View style={[tw`flex-1 justify-center items-center`]}>
                    <Image
                        source={require('./../../../assets/Vector.png')}
                        style={{ height: hp('10%'), width: wp('20%') }}
                        resizeMode="contain"
                    />
                    <Text

                        style={[tw`text-xl  p-2`, { fontFamily: 'PoppinsBold', color: Colors.orange }]}>Under Review</Text>
                    <Text

                        style={[tw`text-sm p-2 px-7 `, { fontFamily: 'PoppinsRegular', textAlign: 'center' }]}>Your applicatioin is undergoing evaluation. Once we get a chance to look through it we will email you next steps.</Text>

                    <Card>
                        <View style={[tw`flex-row py-7 my-3 px-4 justify-between`]}>
                            <View>
                                <Text className='text-xl' style={{ fontFamily: 'PoppinsBold' }}>Ragnar Lothbrok</Text>
                                <Text className='text-xs' style={{ fontFamily: 'PoppinsMedium', textTransform: 'uppercase' }}>Started 11/12</Text>
                            </View>

                            <View style={[tw` ml-2 `]}>

                                <Button
                                    shape="default"
                                    onPress={() => {navigation.navigate('ApplicationQuestionnare') }}
                                    iconPosition="right"
                                    text="View"
                                    icon="AntDesign arrowright 24 white"
                                />
                            </View>
                        </View>
                    </Card>
                </View>
            }

        </Details>
    )
}

export default ApplicationStatus