import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Separator } from "../../components/Separator/Separator";
import SessionCard from "../../components/SessionCard/SessionCard";
import Details from "../../layouts/Details/Details";
import Button from "../../components/Button/Button";

type Props = {
    amount: string
    currency: string
    method: string
    successImage: any
    successText: string
    failureImage: any
    failureText: string
}

const PaymentStatus: React.FC<Props> = ({ amount, currency, method }) => {

    const [isSuccessful, setIsSuccessful] = useState(false)

    const handleRetry = () => {
        alert('Pressed');
    }

    return (
        <Details headerTitle="Payment Status">
            <View style={[tw`  `, { flex: '0.7', marginTop: hp('10') }]}>
                <Image
                    source={isSuccessful ? require('../../../assets/payment.jpg') : require('../../../assets/failed.jpg')}
                    resizeMode='contain'
                    style={[tw`self-center`]}
                />
                <Text
                    style={[
                        tw`self-center py-3`, { fontFamily: 'PoppinsBold', fontSize: hp('2.3'), color: isSuccessful ? Colors.orange : Colors.black }
                    ]}
                >
                    {isSuccessful ?
                        (
                            <Text>Payment Successful</Text>

                        ) :
                        (
                            <Text>Payment Failed</Text>
                        )
                    }
                </Text>


                {isSuccessful ?
                    (
                        <View style={[tw`flex-row justify-between self-center w-90 p-2`]}>
                            <View style={[tw`flex-row`]}>
                                <Text style={[{ fontFamily: 'PoppinsRegular' }]}>TOTAL PAID:</Text>
                                <Text style={[{ fontFamily: 'PoppinsSemiBold' }]}> {amount} {currency}</Text>
                            </View>
                            <View style={[tw`flex-row`]}>
                                <Text style={[{ fontFamily: 'PoppinsRegular' }]}>Payment Method:</Text>
                                <Text style={[{ fontFamily: 'PoppinsSemiBold' }]}> {method} </Text>
                            </View>
                        </View>
                    )
                    :
                    (
                        <>
                            <Text style={[tw`self-center pb-5 pt-1`]}>Try again to lock in your session</Text>
                            <View
                                style={[tw`self-center`, { width: wp('80'),  }]}
                            >

                                <Button
                                    onPress={handleRetry}
                                    shape='full'
                                    text='Retry'
                                />
                            </View>
                        </>
                    )
                }

                <View style={[tw`py-4`]}>
                    <Separator type="line" />
                </View>
                <SessionCard
                    class_name='Math'
                    with='John Doe'
                    created_date='2020-01-01'
                    time='12:00 PM'
                    day='Monday'
                    is_accepted={isSuccessful}
                    is_completed={false}
                    payment_fulfilled={false}
                    payment_amount={"200"}
                    location='online'
                />
                {isSuccessful ?
                    (
                        <TouchableOpacity
                            style={[tw`self-center py-2`, {}]}
                            onPress={() => alert('pressed')}
                        >
                            <Text
                                style={[{ fontFamily: 'PoppinsMedium', color: Colors.orange }]}
                            >View session confirmation</Text>
                        </TouchableOpacity>

                    )
                    :

                    (
                        null
                    )

                }
            </View>
        </Details>
    )
}

export default PaymentStatus
