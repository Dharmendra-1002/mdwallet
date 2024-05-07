import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={`bg-blue-500 py-2 px-4 rounded`}>
      <Text style={`text-white text-base`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
