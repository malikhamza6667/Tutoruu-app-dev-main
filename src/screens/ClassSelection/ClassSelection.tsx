import React from "react";
import { View, Text } from 'react-native'
import Details from "../../layouts/Details/Details";
import ClassCard from "../../components/ClassCard/ClassCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import HorizontalList from "../../layouts/HorizontalList/HorizontalList";


const data = [
    {
        id: 1,
        name: 'Financial Management',
        desc: 'FIN201',
        sessions: 13,
        onPress: '',
        rating: 4,
        count: 5

    },
    {
        id: 1,
        name: 'Financial Management',
        desc: 'FIN201',
        sessions: 13,
        onPress: '',
        rating: 4,
        count: 5

    },

]

const ClassSelection = ({ navigation }) => {
    return (
        <Details headerTitle="Pick A Class">
            <HorizontalList
                horizontal={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <CourseCard
                            name={item.name}
                            desc={item.desc}
                            rating={item.rating}
                            reviews_count={item.count}
                            num_sessions={item.sessions}
                            onPress={() => { }}
                        />
                    )
                }}


            />
        </Details>
    )
}

export default ClassSelection