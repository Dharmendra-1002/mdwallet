import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
const Notifications1 = () => {
  return (
    <SafeAreaView className="bg-violet-950 flex-1">
      <View className={`flex-1 justify-center items-center `}>
        <View className={`w-96 h-5/6 bg-white rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center `}>
            <TouchableOpacity>
              <Text className={`text-lg font-bold text-white bg-violet-950 rounded-lg p-3 `}>Credit Limit Approval</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 10 }} />
          <MyTextInput label="OEM/Distributor" />
          <MyTextInput label="Name" />
          <MyTextInput label="Credit Limit" />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ width: '50%' }}>
              <View style={{ borderRadius: 20, overflow: 'hidden' }}>
                <Button title="Approve" color="green" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications1;

