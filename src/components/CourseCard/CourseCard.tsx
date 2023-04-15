import React from "react";

import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import tw from 'twrnc';
import Colors from "../../../assets/Colors";
import { Card } from "../../layouts/Card/Card";
import Button from "../Button/Button";
import StarRatings from "../StarRatings/StarRatings";

{/* <CourseCard
 name='Math' 
 desc='M-123' 
 rating={5} 
 reviews_count={0} 
 num_sessions={0} 
 in_person={true} /> */}

type Props = {
    name: string
    desc?: string
    rating: number
    reviews_count: number
    num_sessions: number
    in_person: boolean
    onPress: () => void
}
const CourseCard: React.FC<Props> = ({
    name,
    desc,
    onPress,
    rating,
    reviews_count,
    num_sessions,
    in_person
}) => {
    return (
        <Card>

            <View style={{ paddingHorizontal: wp('5%'), paddingVertical: hp('2%') }}>
                <View style={[tw`flex-row justify-between `]}>
                    <View  >

                        <Text style={[tw``, { fontFamily: 'PoppinsRegular', color: Colors.orange }]}>{in_person ? 'In Person' : 'Online'}</Text>
                    </View>
                    <View style={[tw`flex-row items-end px-1 `, { justifyContent: 'flex-end' }]}>
                        <View style={tw`flex-row`}>
                            <Text
                                testID="reviews-count"

                                style={[tw`text-xs`, { fontFamily: 'PoppinsRegular', color: Colors.orange }]}>{reviews_count}</Text>
                            <Text
                                style={[tw`text-xs`, { fontFamily: 'PoppinsRegular', color: Colors.orange }]}>.</Text>
                        </View>
                        <StarRatings
                            testId="rating-stars"
                            rating={rating}
                            isDisable
                            size={14}
                            numStars={1}
                        />

                    </View>

                </View>
                <View style={[tw`flex-row justify-between`, {}]}>
                    <View>
                        <Text style={[tw`text-base`, { fontFamily: 'PoppinsMedium', color: Colors.black }]}>{name}</Text>
                        <Text style={[tw``, { fontFamily: 'PoppinsMedium', textTransform: 'uppercase', color: Colors.gray }]}>{desc}</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text

                            testID="num-sessions"
                            style={[tw`text-xs`, { fontFamily: 'PoppinsMedium', color: Colors.orange }]}>{num_sessions}

                        </Text>
                        <Text style={[tw`text-xs`, { fontFamily: 'PoppinsMedium', color: Colors.gray }]}>
                            sessions
                        </Text>
                    </View>
                </View>
                <View >

                    <Button
                        testID="button"
                        text="Take Class"
                        backgroundColor={Colors.orange}
                        shape='default'
                        width={wp('35%')}
                        height={hp('5%')}
                        onPress={onPress}

                    />
                </View>
            </View>
        </Card>
    )
}

export default CourseCard