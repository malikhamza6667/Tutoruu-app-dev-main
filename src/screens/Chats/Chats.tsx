import React from "react";
import {View,Text, ScrollView} from 'react-native'
import Details from "../../layouts/Details/Details";
import ChatPreview from "../../components/ChatPreview/ChatPreview";
import tw from 'twrnc';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";

const inbox=[

    {
        id: 0,
        last_message:"Got It Thanks(:",
            last_message_date:"05-04-2023",
            unread_count:3,
            user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    },
    {
        id: 1,
        last_message:"Got It Thanks(:",
            last_message_date:"05-04-2023",
            unread_count:3,
            user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    },
    {
        id: 2,
        last_message:"Got It Thanks(:",
            last_message_date:"05-04-2023",
            unread_count:3,
            user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    },
]
const earlier=[

    {
        id: 0,
        last_message:"Got It Thanks(:",
            last_message_date:"05-04-2023",
            unread_count:0,
            user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    },
    {
        id: 1,
        last_message:"Got It Thanks(:",
            last_message_date:"05-04-2023",
            unread_count:0,
            user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    },
    // {
    //     id: 2,
    //     last_message:"Got It Thanks(:",
    //         last_message_date:"05-04-2023",
    //         unread_count:3,
    //         user: { name: 'John Doe', image: 'https://i.pravatar.cc/300', username: 'johndoe' }
    // },
]


const Chats :React.FC=()=>{
    return(
        <Details headerTitle="Chats">
<ScrollView>

<View style={[tw`py-2 pb-3`]}>
            <Text style={[tw`px-5 py-2 text-base`,{fontFamily:'PoppinsMedium'}]}>Inbox</Text>
            {
                inbox.map((item,key)=>{
                    return(
<ChatPreview
key={key}
            last_message={item.last_message}
            last_message_date={item.last_message_date}
            unread_count={item.unread_count}
            user={item.user}
            
            />
                    )
                })
            }
            
        </View>
        <View style={[tw`py-2 pb-3`]}>
            <Text style={[tw`px-5 py-2 text-base `,{fontFamily:'PoppinsMedium'}]}>This Week</Text>
            {
                earlier.map((item,key)=>{
                    return(
<ChatPreview
key={key}
            last_message={item.last_message}
            last_message_date={item.last_message_date}
            unread_count={item.unread_count}
            user={item.user}
            
            />
                    )
                })
            }
            
        </View>
        <View style={[tw`py-2 pb-3`]}>
            <Text style={[tw`px-5 py-2 text-base `,{fontFamily:'PoppinsMedium'}]}>This Month</Text>
            {
                earlier.map((item,key)=>{
                    return(
<ChatPreview
key={key}
            last_message={item.last_message}
            last_message_date={item.last_message_date}
            unread_count={item.unread_count}
            user={item.user}
            
            />
                    )
                })
            }
            
        </View>
</ScrollView>
        </Details>
    )
}

export default Chats