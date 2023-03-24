import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
interface SeparatorProps {
    type: 'line' | 'dot';
  }
  
export const Separator: React.FC<SeparatorProps> = ({ type }) => {
    return (
      <View testID='separator' style={type === 'line' ? tw`border-b-2 border-gray-300` : tw`w-1 h-1 rounded-full bg-gray-300`} />
    );
  };