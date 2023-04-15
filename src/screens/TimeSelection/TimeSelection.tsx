import React from "react";
import { View, Text } from "react-native";
import Details from "../../layouts/Details/Details";
import SlotsCard from "../../components/SlotsCard/SlotsCard";

const TimeSelection = () => {
    return (
        <Details headerTitle="Pick A Time">
            <SlotsCard slots={0} />
        </Details>
    )
}

export default TimeSelection