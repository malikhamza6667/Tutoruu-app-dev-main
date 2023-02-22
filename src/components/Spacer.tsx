import React from "react";
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface Props {
  children?: React.ReactNode;
}

const Spacer: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.spacer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    marginBottom: hp('1'),
  },
})

export default Spacer