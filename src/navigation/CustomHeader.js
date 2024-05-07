// CustomHeader.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null; // Render nothing if not on the home screen
  }

  return (
    <View style={{ backgroundColor: '#4e2d87', height: 105, flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:25, paddingVertical:25,alignItems:"center"  }}>
      <View className='flex-row space-x-5 items-center'>
      <TouchableOpacity style={{  }} onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={25} color="#fff" />
      </TouchableOpacity>
      <View style={{  }}>
        <Text className=' text-white font-medium text-base'>Anand Kumar Seethala</Text>
        <Text className=' text-white font-medium text-base'>Managing Director</Text>
        <Text className=' text-white font-medium text-base'>ID - 00000</Text>
        
        </View>
        </View>
        <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" size={25} color="#ffff" />
          </TouchableOpacity>
        
    
    </View>
  );
};

export default CustomHeader;
