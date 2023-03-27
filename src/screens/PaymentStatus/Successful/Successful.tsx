import React from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Colors from "../../../../assets/Colors";
import { Separator } from "../../../components/Separator/Separator";
import SessionCard from "../../../components/SessionCard/SessionCard";
import Details from "../../../layouts/Details/Details";


type Props = {
    amount: string
    currency: string
    method: string
}
const Successful: React.FC<Props> = ({ amount, currency, method }) => {

    return (
        <Details headerTitle="Payment">
            <View
                style={[
                    tw`  `, { flex: '0.7', marginTop: hp('10') }
                ]}
            >
                <Image
                    source={require('../../../../assets/payment.jpg')}
                    resizeMode='contain'
                    style={[
                        tw`self-center`
                    ]}
                />
                <Text
                    style={[
                        tw`self-center py-3`, { fontFamily: 'PoppinsBold', fontSize: hp('2.3'), color: Colors.orange }
                    ]}
                >Payment Successful</Text>
                <View
                    style={[
                        tw`flex-row justify-between self-center w-90 p-2`
                    ]}
                >
                    <View
                        style={[
                            tw`flex-row`
                        ]}
                    >

                        <Text
                            style={[
                                { fontFamily: 'PoppinsRegular' }
                            ]}
                        >TOTAL PAID:</Text>
                        <Text
                            style={[
                                { fontFamily: 'PoppinsSemiBold' }
                            ]}
                        > {amount} {currency}</Text>
                    </View>
                    <View
                        style={[
                            tw`flex-row`
                        ]}
                    >

                        <Text
                            style={[
                                { fontFamily: 'PoppinsRegular' }
                            ]}
                        >Payment Method:</Text>
                        <Text
                            style={[
                                { fontFamily: 'PoppinsSemiBold' }
                            ]}
                        > {method} </Text>
                    </View>
                </View>
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

export default Successful