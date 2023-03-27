import React from "react";
import { View, Text } from "react-native";
import Heading from "../../components/Heading/Heading";
import { Notification } from '../../components/Notification/Notification'
import Spacer from "../../components/Spacer/Spacer";
import Details from "../../layouts/Details/Details";

const NotificationScreen = () => {
    return (
        <Details headerTitle="Notifications">
            <Heading heading="Today" />
            <Spacer />
            <Notification
                text="This is a notification!"
                is_read={false}
                image='https://img.freepik.com/free-photo/young-stylish-woman-model-casual-summer-clothes-with-red-lips-posing-near-blue-wall-showing-peace-sign_158538-7430.jpg?size=626&ext=jpg&ga=GA1.1.1081558094.1677063520&semt=ais'
            />
            <Notification
                text="This is a notification!"
                is_read={false}
                image='https://img.freepik.com/free-photo/young-stylish-woman-model-casual-summer-clothes-with-red-lips-posing-near-blue-wall-showing-peace-sign_158538-7430.jpg?size=626&ext=jpg&ga=GA1.1.1081558094.1677063520&semt=ais'
            />
        </Details>

    )
}

export default NotificationScreen