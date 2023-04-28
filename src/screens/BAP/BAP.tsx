import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Details from "../../layouts/Details/Details";



const BAP = () => {
    return (
        <Details headerTitle="About">
            <View style={[{ width: wp('95'), alignSelf: 'center' }]}>
                <Text style={[{ fontFamily: 'PoppinsBold', fontSize: hp('2.3') }]}>
                    What is the Brand Ambassador Program?
                </Text>


                <Text style={[{ fontFamily: 'PoppinsRegular' }]}>
                    It’s a marketing campaign that puts our company's message in the hands of ambassadors with specific goals in mind, such as improving sales, cultivating a reputation, and building brand recognition.{"\n"}{'\n'}{'\n'}

                    As a brand ambassador, you will be expected to publicize Tutoruu’s message through user-generated content, affiliate marketing and awareness stunts.{"\n"}{'\n'}{'\n'}

                    The role of this position is to publicize Tutoruu on and off campus, to reach a specific Key Performance Index (KPI){"\n"}{'\n'}{'\n'}

                    The compensation for this position is 5000 EGP per semester If you think you have what it takes, fill in the form below to receive more details{"\n"}{'\n'}{'\n'}
                </Text>

            </View>
        </Details>
    )
}



// const DESCRIPTION_MAX_LINES = 3;

// const BAP = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => setShowMore(!showMore);

//   const descriptionText = `It’s a marketing campaign that puts our company's message in the hands of ambassadors with specific goals in mind, such as improving sales, cultivating a reputation, and building brand recognition. 

// As a brand ambassador, you will be expected to publicize Tutoruu’s message through user-generated content, affiliate marketing and awareness stunts. 

// The role of this position is to publicize Tutoruu on and off campus, to reach a specific Key Performance Index (KPI)

// The compensation for this position is 5000 EGP per semester If you think you have what it takes, fill in the form below to receive more details`;

//   const descriptionStyle = {
//     fontFamily: 'PoppinsRegular',
//     lineHeight: 20,
//   };

//   return (
//     <>
//       <Text style={descriptionStyle} numberOfLines={showMore ? undefined : DESCRIPTION_MAX_LINES}>
//         {descriptionText}
//       </Text>
//       {descriptionText.length > DESCRIPTION_MAX_LINES * 60 && (
//         <TouchableOpacity onPress={toggleShowMore}>
//           <Text style={{ color: 'blue' }}>{showMore ? 'Read less' : 'Read more'}</Text>
//         </TouchableOpacity>
//       )}
//     </>
//   );
// };



export default BAP