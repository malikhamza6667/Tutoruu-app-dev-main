import React from 'react';
import { FlatList, ListRenderItem, FlatListProps } from 'react-native';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'


interface Props<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

const HorizontalList = <T extends {}>({ data, renderItem, ...rest }: Props<T>) => {
  return( 
  <FlatList<T> 
  testID='horizontal-list'
  data={data} 
  renderItem={renderItem} 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={{paddingVertical:hp('1%'),paddingHorizontal:hp('2')}} 
  {...rest}
   />)
};

export default HorizontalList














// import React from "react";


// import { FlatList ,FlatListProps,Text} from "react-native";
// import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
// // type Props={
// //     data: any,
// //     renderItem: any,
// //     keyExtractor: any
// // }


// interface Props<T> extends FlatListProps<T> {
//     data: T[];
//   }

// const HorizontalList:React.FC<T extends {}>=({ data, ...rest }: Props<T>)=>{
//     return(
//        <FlatList
//        data= {props.data}
//        renderItem={props.renderItem}
//        keyExtractor={props.keyExtractor}
//        contentContainerStyle={{padding: hp('2%')}}
//        horizontal
       
//        />
//     )
// }

// export default HorizontalList




