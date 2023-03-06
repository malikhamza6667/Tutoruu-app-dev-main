import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers,selectUsers } from '../../../redux/reducers/Dummy/DummyReducer';

const UserList:React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
   
<View className='flex-1 justify-center bg-green-500'>
    <Text>Countries</Text>
    <FlatList
    data={users}
    renderItem={({item})=>{
       return(
<View className='border h-24'>
    <Text>{item.name}</Text>
</View>
       ) 
    }}
    keyExtractor={item=>{item.id}}
    
    />
</View>

        )}
export default UserList