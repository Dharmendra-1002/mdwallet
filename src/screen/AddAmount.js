import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'


const MyTextInput = ({ label }) => {
  const [text, setText] = useState('');

  return (

    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 5,
          backgroundColor: 'white',
        }}
        onChangeText={setText}
        value={text}
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </View>
  );
};

const AddAmount = () => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>




      <View className={`flex-1 justify-center items-center `}>
        <View className={`w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center `}>


          </View>
          <View style={{ padding: 20 }}>
          <MyTextInput label="Date" />
        {/* <Text style={{ fontSize: 20, color: '#4e2d87' }}>Rto Details</Text> */}
        <MyTextInput label="Select OEM Distributor" />
        <MyTextInput label="Select Name" />
        <MyTextInput label="Reference UTR number" />
        <MyTextInput label="Amount(Rs)" />




        
</View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default AddAmount