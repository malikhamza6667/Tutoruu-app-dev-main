// import React from "react";
// import { View, Text } from "react-native";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import tw from 'twrnc';

// const Spacer = () => {

//     return (
//         <View
//         testID="spacer"

//             style={[
//                 tw``, { marginVertical: hp('0.5') }
//             ]}
//         ></View>
//     )
// }

// export default Spacer




import React, { FC, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

interface SpacerProps {
  style?: ViewStyle;
}

const Spacer: FC<SpacerProps> = ({ style }): ReactElement => {
  const defaultStyle = tw`items-center justify-center`;
  const mergedStyle = [defaultStyle, { marginVertical: hp('0.5%') }, style];

  return <View testID="spacer" style={mergedStyle} />;
};

export default Spacer;
