

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const AssignCreditLimit = () => {
    return (
        <SafeAreaView className="bg-violet-950 flex-1" >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                    <View style={{ justifyContent: 'start', alignItems: 'start' }}>
                        <MyTextInput label="Select Date" />
                        <MyTextInput label="Select OEM/Distributor" />
                        <MyTextInput label="Select Name" />
                        <MyTextInput label="Credit Limit" /> 
                   
                    </View>
                    <TouchableOpacity>
                        <View className="bg-violet-950 p-3">
                            <Text className="text-center text-white">Submit</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AssignCreditLimit;
