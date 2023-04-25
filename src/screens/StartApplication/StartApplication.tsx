import React, { useState } from "react";

import { View, Text, ScrollView } from 'react-native'
import Details from "../../layouts/Details/Details";

import tw from 'twrnc';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";
import Switch from "../../components/Switch/Switch";
import Button from "../../components/Button/Button";
type Props={
    navigation?:any
}
const StartApplication: React.FC<Props> = ({ navigation }) => {
    const [isOn, setIsOn] = useState(false)
    return (
        <Details headerTitle="Start Application">

            <View  style={[tw`px-5`]}>
                <View  style={[tw`flex-row`]}>

                    <Text style={[tw`text-3xl px-2`,{ fontFamily: 'PoppinsBold', textTransform: 'capitalize' }]}  >Hey</Text>
                    <Text style={[tw`text-3xl`,{ fontFamily: 'PoppinsBold', textTransform: 'capitalize', color: Colors.orange }]} >Ragnar</Text>
                    <Text style={[tw`text-3xl`,{ fontFamily: 'PoppinsBold', textTransform: 'capitalize' }]} >!</Text>
                </View>

                <Text style={[tw`text-3xl`,{ fontFamily: 'PoppinsBold', textTransform: 'capitalize' }]} >Welcome to the Tutoruu family </Text>

            </View>
            <View  style={[tw`px-6 pb-5`]}>
                <Text style={{ fontFamily: 'PoppinsRegular' }} className='text-sm'>
                    Before you begin your application, you’ll need to make sure you have read through our code of conduct below. Standardizing the quality of student-led tutoring sessions is foundational to the supportive, trustworthy community that we are building, and that you are part of!
                </Text>
            </View>

            <View  style={[tw`px-5 py-3`]}>
                <Text style={[tw`text-base px-3 py-3`,{ fontFamily: 'PoppinsBold', textTransform: 'capitalize' }]} >Code Of Conduct</Text>

                <View style={[tw`p-5  rounded-3xl`,{ height: hp('30%'), backgroundColor: '#FCF6EB' }]} >

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={{ fontFamily: 'Poppins' }} className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing diam morbi erat rutrum interdum hendrerit turpis. Dolor ut auctor proin auctor vitae porttitor. Pellentesque gravida integer consectetur non id nunc sed enim. Malesuada amet rhoncus et donec imperdiet. Eget pellentesque augue vel felis. Semper quis vestibulum et lorem bibendum. Quisque proin ligula rutrum eget. Vulputate libero at sem odio blandit donec massa auctor cursus. Bibendum commodo laoreet a mollis eget. Cras ut dui sed nunc maecenas. Sollicitudin nisl eu tristique non eu arcu in blandit pharetra. Tellus faucibus vel sed ut mattis id feugiat.
                            In luctus vitae elit sit sollicitudin sed nibh. Pulvinar nunc massa quis molestie eget facilisis id. Iaculis sapien purus dui dis eleifend nunc elementum pharetra. Facilisis aliquet ullamcorper ac massa sapien ut enim. Tempus ac porta senectus nibh fermentum. Id blandit in auctor rutrum viverra odio sit. Lorem orci mauris augue purus adipiscing nibh purus ultrices. Dui ultrices pretium etiam feugiat habitant placerat. Facilisis enim amet sodales nisl tortor cras aliquet massa. Gravida fames egestas eget ipsum ultrices condimentum.
                            Eget a et auctor donec nunc semper est id vivamus. Tempor imperdiet elementum magnis aliquet nisl aliquet semper aenean erat. Nibh nisl velit in quisque netus. Amet ultrices volutpat purus pellentesque. Eu volutpat accumsan orci imperdiet. Orci viverra viverra nibh scelerisque eget diam pretium nunc. Luctus nisl mattis in morbi nisi rutrum eu euismod. Feugiat netus eget rhoncus in faucibus mi donec. Condimentum amet sed neque lorem ut praesent. Orci augue faucibus iaculis lorem. Volutpat suspendisse varius diam tellus. Facilisi et placerat iaculis nisl suspendisse montes. Massa quisque in sapien ut.
                        </Text>
                    </ScrollView>
                </View>
                <View style={[tw`flex-row`]}>
                    <Switch
                        opened={isOn}
                        onToggle={() => { setIsOn(!isOn) }}
                    />
                    {!isOn && <Text style={[tw`px-3 py-2`, { textAlign: 'justify', width: wp('70%') }]} >

                        <Text style={{ fontFamily: 'PoppinsRegular', textAlign: 'center' }}>I have </Text>
                        <Text style={{ fontFamily: 'PoppinsRegular', color: Colors.red }}>not </Text>
                        <Text style={{ fontFamily: 'PoppinsRegular' }}>read & </Text>
                        <Text style={{ fontFamily: 'PoppinsRegular', color: Colors.red }}>donot </Text>


                        <Text style={{ fontFamily: 'PoppinsRegular', textAlign: 'justify' }}>agree to the code of conduct</Text>
                    </Text>}

                    {isOn && <Text style={[tw`px-3 py-2`, { textAlign: 'justify', width: wp('70%') }]} >

                        <Text style={{ fontFamily: 'PoppinsRegular', textAlign: 'center' }}>I have </Text>

                        <Text style={{ fontFamily: 'PoppinsRegular' }}>read & </Text>



                        <Text style={{ fontFamily: 'PoppinsRegular', textAlign: 'justify' }}>agree to the code of conduct</Text>
                    </Text>}
                </View>
                <Button
                    disabled={isOn ? false : true}
                    shape="full"
                    onPress={() => navigation.navigate('ApplicationQuestionnare')}
                    text="Start Tutor Application"
                />


            </View>
        </Details>
    )
}

export default StartApplication