import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Details from "../../layouts/Details/Details";
import SlotsCard from "../../components/SlotsCard/SlotsCard";
type Props={
    navigation?:any
}
const TimeSelection:React.FC<Props> = ({navigation}) => {
    return (
        <Details headerTitle="Pick A Time">
            <TouchableOpacity
            onPress={()=>{navigation.navigate('SessionConfirmation')}}
            >

            <SlotsCard slots={[{ date: '2020-01-01', available_times: [12, 13, 14] }]} />
            </TouchableOpacity>
            {/* <SlotsCard  slots={0} /> */}
        </Details>
    )
}

export default TimeSelection