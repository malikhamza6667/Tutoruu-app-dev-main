import React from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Colors from "../../../../assets/Colors";
import Button from "../../../components/Button/Button";
import { Separator } from "../../../components/Separator/Separator";
import SessionCard from "../../../components/SessionCard/SessionCard";
import Details from "../../../layouts/Details/Details";


type Props = {
    amount: string
    currency: string
    method: string
}
const Failed: React.FC<Props> = ({ amount, currency, method }) => {

    return (
        <Details headerTitle="Payment" >
            <View
                style={[
                    tw`  `, { flex: '0.7', marginTop: hp('10') }
                ]}
                testID="failed-screen"
            >
                <Image
                    source={require('../../../../assets/failed.jpg')}
                    resizeMode='contain'
                    style={[
                        tw`self-center`
                    ]}
                />
                <Text
                    style={[
                        tw`self-center pt-5`, { fontFamily: 'PoppinsSemiBold', fontSize: hp('2.3'), color: Colors.black }
                    ]}
                    testID="payment-failed-text"
                >Payment Failed</Text>
                <Text
                    style={[
                        tw`self-center pb-5 pt-1`
                    ]}
                >Try again to lock in your session</Text>

                <Button
                    onPress={() => { alert('Pressed') }}
                    shape='default'
                    text='Retry'
                    width={wp('80%')}
                    height={hp('5%')}
                />
                <View
                    style={[
                        tw`py-4`
                    ]}
                >
                    <Separator type="line" />
                </View>
                <SessionCard
                    class_name='Math' with='John Doe' created_date='2020-01-01' time='12:00 PM' day='Monday' is_accepted={true}
                    is_completed={false} payment_fulfilled={false} payment_amount={"200"} location='online'
                />
            </View>
        </Details>
    )
}

export default Failed