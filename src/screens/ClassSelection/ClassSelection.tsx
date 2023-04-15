import React from "react";
import { View, Text } from 'react-native'
import Details from "../../layouts/Details/Details";
import ClassCard from "../../components/ClassCard/ClassCard";
import CourseCard from "../../components/CourseCard/CourseCard";

const ClassSelection = ({ navigation }) => {
    return (
        <Details headerTitle="Pick A Class">

            <CourseCard
                name="Financial Management"
                desc="FIN201"
                rating={4}
                reviews_count={4.4}
                num_sessions={13}
                onPress={() => { }}
            />
        </Details>
    )
}

export default ClassSelection